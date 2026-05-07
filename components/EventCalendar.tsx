'use client'

import React, { useState } from 'react';

const EVENTS = [
  { id: 1, date: new Date(2026, 0, 1), category: 'Academic', title: 'School Re-Opening & New Session Begins', time: 'All Day', location: 'School Campus' },
  { id: 2, date: new Date(2026, 0, 26), category: 'Festival', title: 'Basant Panchami', time: 'All Day', location: 'School Campus' },
  { id: 3, date: new Date(2026, 0, 26), category: 'National Event', title: 'Republic Day', time: 'All Day', location: 'School Ground' },
  { id: 4, date: new Date(2026, 1, 15), category: 'Festival', title: 'Mahashivratri', time: 'All Day', location: 'N/A' },
  { id: 5, date: new Date(2026, 2, 3), category: 'Festival', title: 'Holi', time: 'All Day', location: 'N/A' },
  { id: 6, date: new Date(2026, 2, 21), category: 'School Event', title: 'Annual Sports Day', time: 'All Day', location: 'School Ground' },
  { id: 7, date: new Date(2026, 3, 3), category: 'Holiday', title: 'Good Friday', time: 'All Day', location: 'N/A' },
  { id: 8, date: new Date(2026, 3, 14), category: 'Holiday', title: 'Ambedkar Jayanti', time: 'All Day', location: 'N/A' },
  { id: 9, date: new Date(2026, 4, 15), category: 'Academic', title: 'Summer Vacation Begins', time: 'All Day', location: 'N/A' },
  { id: 10, date: new Date(2026, 6, 1), category: 'Academic', title: 'School Re-Opens After Summer Break', time: 'All Day', location: 'School Campus' },
  { id: 11, date: new Date(2026, 6, 17), category: 'Holiday', title: 'Muharram', time: 'All Day', location: 'N/A' },
  { id: 12, date: new Date(2026, 7, 15), category: 'National Event', title: 'Independence Day', time: 'All Day', location: 'School Ground' },
  { id: 13, date: new Date(2026, 7, 26), category: 'Festival', title: 'Janmashtami', time: 'All Day', location: 'N/A' },
  { id: 14, date: new Date(2026, 8, 5), category: 'School Event', title: "Teachers' Day", time: 'All Day', location: 'School Campus' },
  { id: 15, date: new Date(2026, 9, 2), category: 'National Event', title: 'Gandhi Jayanti', time: 'All Day', location: 'N/A' },
  { id: 16, date: new Date(2026, 9, 16), category: 'Festival', title: 'Dussehra', time: 'All Day', location: 'N/A' },
  { id: 17, date: new Date(2026, 10, 10), category: 'Holiday', title: 'Diwali Break', time: 'All Day', location: 'N/A' },
  { id: 18, date: new Date(2026, 10, 24), category: 'Festival', title: 'Guru Nanak Jayanti', time: 'All Day', location: 'N/A' },
  { id: 19, date: new Date(2026, 11, 25), category: 'Festival', title: 'Christmas Day', time: 'All Day', location: 'N/A' },
  { id: 20, date: new Date(2026, 11, 31), category: 'Academic', title: 'Winter Vacation Begins', time: 'All Day', location: 'N/A' },
  { id: 21, date: new Date(2026, 0, 17), category: 'School Event', title: 'Annual Day Celebration', time: 'All Day', location: 'School Campus' },
];

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function EventCalendar() {
  // Initialize to January 2026 so events show up right away
  const [currentDate, setCurrentDate] = useState(new Date(2026, 0, 1));
  const [selectedEvent, setSelectedEvent] = useState<typeof EVENTS[0] | null>(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const getEventsForDay = (day: number) => {
    return EVENTS.filter(e => e.date.getFullYear() === year && e.date.getMonth() === month && e.date.getDate() === day);
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-xl overflow-hidden flex flex-col h-full">
      {/* Calendar Header */}
      <div className="bg-blue-950 text-white p-5 flex justify-between items-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-400/10 rounded-full -ml-12 -mb-12 pointer-events-none" />

        <div className="flex items-center gap-2 z-10">
          <button onClick={handlePrevMonth} className="p-2 hover:bg-white/20 rounded-full transition-colors material-symbols-outlined flex items-center justify-center">chevron_left</button>
          <button onClick={handleNextMonth} className="p-2 hover:bg-white/20 rounded-full transition-colors material-symbols-outlined flex items-center justify-center">chevron_right</button>
          <button onClick={goToToday} className="ml-2 px-3 py-1 text-xs font-semibold border border-white/30 rounded hover:bg-white/10 transition-colors uppercase tracking-wider">Today</button>
        </div>
        <h3 className="text-2xl font-bold z-10" style={{ fontFamily: 'Georgia, serif' }}>
          {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h3>
      </div>

      {/* Calendar Body */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="grid grid-cols-7 gap-2 text-center mb-4">
          {DAYS_OF_WEEK.map(day => (
            <div key={day} className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2 flex-1">
          {Array.from({ length: firstDayOfMonth }).map((_, i) => (
            <div key={`empty-${i}`} className="min-h-[80px] p-2 bg-gray-50/50 dark:bg-gray-800/50 rounded-lg"></div>
          ))}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const dayEvents = getEventsForDay(day);
            const isToday = new Date().toDateString() === new Date(year, month, day).toDateString();

            return (
              <div
                key={day}
                className={`min-h-[80px] p-2 border rounded-lg flex flex-col transition-all duration-300
                  ${isToday ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-400 shadow-sm' : 'bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 hover:border-blue-900 hover:shadow-md'}`}
              >
                <div className={`text-right text-sm font-bold mb-2 ${isToday ? 'text-amber-600 dark:text-amber-400' : 'text-gray-700 dark:text-gray-300'}`}>{day}</div>
                <div className="flex-grow space-y-1.5 overflow-y-auto">
                  {dayEvents.map(event => (
                    <button
                      key={event.id}
                      onClick={() => setSelectedEvent(event)}
                      className="w-full text-left text-xs leading-tight bg-blue-50 hover:bg-blue-100 text-blue-900 dark:bg-blue-900/30 dark:hover:bg-blue-900/50 dark:text-blue-100 p-1.5 rounded font-semibold transition-colors truncate border border-blue-100 dark:border-blue-800/50"
                      title={event.title}
                    >
                      {event.title}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Event Details Modal/Popup (simple inline version) */}
      {selectedEvent && (
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="bg-secondary-container p-6 flex justify-between items-start">
              <div>
                <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-1 block">{selectedEvent.category}</span>
                <h4 className="text-2xl font-bold text-blue-950" style={{ fontFamily: 'Georgia, serif' }}>{selectedEvent.title}</h4>
              </div>
              <button onClick={() => setSelectedEvent(null)} className="text-blue-950 hover:bg-black/10 rounded-full p-1 transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3 text-on-surface-variant">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-950 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined">calendar_today</span>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Date</div>
                  <div className="font-semibold text-gray-900 dark:text-white">{selectedEvent.date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-on-surface-variant">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-950 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Time</div>
                  <div className="font-semibold text-gray-900 dark:text-white">{selectedEvent.time}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-on-surface-variant">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-950 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Location</div>
                  <div className="font-semibold text-gray-900 dark:text-white">{selectedEvent.location}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
