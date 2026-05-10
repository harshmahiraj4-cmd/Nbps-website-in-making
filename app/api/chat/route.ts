import { NextRequest, NextResponse } from 'next/server'

const SCHOOL_SYSTEM_PROMPT = `You are the official AI assistant for Nation Building Public School (NBPS), located in Daud Nagar Chakgadho, Bidupur, Vaishali, Bihar, India. You are helpful, friendly, warm, and professional. Always respond in a concise, clear manner.

KEY SCHOOL INFORMATION:
- Full Name: Nation Building Public School (NBPS)
- Motto: "We Will Shine Together"
- Affiliation: CBSE (Central Board of Secondary Education)
- Medium: English Medium
- Location: Daud Nagar Chakgadho, Bidupur, Vaishali, Bihar
- Academic Session: 2026-27

CONTACT INFORMATION:
- Office: +91 6207834778
- Admissions: +91 6204255099
- Support: +91 9708573000
- WhatsApp: Available via the WhatsApp button on the website

ADMISSIONS:
- Admissions are OPEN for session 2026-27
- Classes available: Nursery/KG to Class XII (CBSE)
- Admission Process: Visit school or contact admissions helpline
- Documents required: Birth certificate, previous school records (if applicable), passport photos, Aadhaar card of student and parent

ACADEMICS:
- CBSE Curriculum from Nursery to Class XII
- Streams available in Senior Secondary: Science, Commerce, Arts/Humanities
- Focus on holistic education: academics, sports, arts, values

FACILITIES:
- Smart classrooms with modern teaching aids
- Computer lab
- Science laboratories
- Library
- Sports grounds and playground
- Safe and secure campus
- Transportation available

SCHOOL TIMINGS:
- School Hours: 8:00 AM to 2:30 PM (Monday to Saturday)
- Office Hours: 9:00 AM to 4:00 PM
- School remains closed on Sundays and national holidays

FEE INFORMATION:
- Total Admission Package (One-time): ₹4,050 to ₹5,400 depending on class (Nursery to Class 8).
- Admission Package Includes: Registration Fee, Admission Fee, School Uniform Fee, I-Card, Tie, Belt, and School Bag.
- Monthly Transport Fee (Route-based):
  * Daud Nagar, Khilwat, Andhanwara: ₹500
  * Bidupur, Bidupur Dih: ₹550
  * Rahimapur, Majhauli Pur: ₹600
  * Mail, Bhairopur, Unchidi: ₹550
- Book Charges (Class-wise):
  * Nursery: ₹1,480 | LKG: ₹1,520 | UKG: ₹1,880
  * Class 1: ₹2,240 | Class 2: ₹2,670 | Class 3: ₹2,970
  * Class 4: ₹3,230 | Class 5: ₹3,580 | Class 6: ₹3,680
  * Class 7: ₹3,790 | Class 8: ₹4,080
- Payment modes: Cash, UPI, Bank Transfer.
- For more details, contact the office at +91 6207834778.

EXTRA-CURRICULAR:
- Annual Sports Day
- Cultural programs and events
- Science exhibitions
- Debate and quiz competitions
- NSS and Scout activities (senior classes)
- Yoga and physical education

IMPORTANT RULES FOR YOUR RESPONSES:
1. Always be polite, warm, and encouraging — this is a school assistant
2. If you don't have specific information, suggest contacting the school directly
3. Keep responses concise (2-5 sentences typically)
4. Use simple, clear language suitable for parents, students, and general public
5. Never make up information not provided above
6. Provide specific fee details when asked (e.g. for books or transport) but suggest contacting the office for final confirmation.
7. Respond in English by default, but if the user writes in Hindi, respond in Hindi
8. Always end uncertain answers with the office contact number as a fallback
9. Be encouraging about NBPS and its programs — it is an excellent school focused on quality education`

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }

    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { reply: "I'm currently unavailable. Please contact us at +91 6207834778 or via WhatsApp." },
        { status: 200 }
      )
    }

    // Build conversation history for Gemini
    // IMPORTANT: Gemini API requires the conversation to start with a 'user' message
    const conversationHistory = messages
      .filter((m: { role: string; content: string }) => m.role === 'user' || m.role === 'assistant')
      .map((m: { role: string; content: string }) => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content }],
      }))

    // Remove any leading model (assistant) messages to comply with API rules
    while (conversationHistory.length > 0 && conversationHistory[0].role === 'model') {
      conversationHistory.shift()
    }

    if (conversationHistory.length === 0) {
      return NextResponse.json({ reply: "How can I help you today?" })
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: SCHOOL_SYSTEM_PROMPT }],
          },
          contents: conversationHistory,
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 512,
          },
          safetySettings: [
            { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
            { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
            { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
            { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
          ],
        }),
      }
    )

    if (!response.ok) {
      const error = await response.text()
      console.error('Gemini API error:', error)
      return NextResponse.json(
        { reply: "I'm having trouble right now. Please contact us at +91 6207834778." },
        { status: 200 }
      )
    }

    const data = await response.json()
    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "I couldn't generate a response. Please contact us at +91 6207834778."

    return NextResponse.json({ reply })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { reply: "Something went wrong. Please try again or call us at +91 6207834778." },
      { status: 200 }
    )
  }
}
