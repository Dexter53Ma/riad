"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";

const WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1;
}

function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function formatISO(date: Date) {
  return date.toISOString().split("T")[0];
}

/* ────────────── Calendar Panel ────────────── */

function CalendarPanel({
  selectedDate,
  onSelect,
  label,
  minDate,
}: {
  selectedDate: Date | null;
  onSelect: (date: Date) => void;
  label: string;
  minDate?: Date;
}) {
  const [viewDate, setViewDate] = useState(selectedDate || new Date());

  useEffect(() => {
    if (selectedDate) setViewDate(selectedDate);
  }, [selectedDate]);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const days: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  return (
    <div className="bg-white rounded-2xl p-4 w-full shadow-lg">
      <p className="text-xs font-medium text-[#2a3936] mb-3 text-center">{label}</p>
      <div className="flex items-center justify-between mb-3">
        <button onClick={() => setViewDate(new Date(year, month - 1, 1))} className="p-1.5 hover:bg-[#f6f4f2] rounded-full transition-colors">
          <ChevronLeftIcon className="w-4 h-4 text-[#2a3936]" />
        </button>
        <p className="text-sm font-medium text-[#2a3936]">
          {MONTHS[month]} {year}
        </p>
        <button onClick={() => setViewDate(new Date(year, month + 1, 1))} className="p-1.5 hover:bg-[#f6f4f2] rounded-full transition-colors">
          <ChevronRightIcon className="w-4 h-4 text-[#2a3936]" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-0.5 mb-1">
        {WEEKDAYS.map((day) => (
          <div key={day} className="text-center text-[9px] text-[#2a3936]/40 uppercase tracking-wider py-1">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-0.5">
        {days.map((day, index) => {
          if (day === null) return <div key={`empty-${index}`} />;
          const date = new Date(year, month, day);
          date.setHours(0, 0, 0, 0);
          const isPast = minDate ? date < minDate : date < today;
          const isSelected = selectedDate &&
            date.getDate() === selectedDate.getDate() &&
            date.getMonth() === selectedDate.getMonth() &&
            date.getFullYear() === selectedDate.getFullYear();
          const isToday = date.getTime() === today.getTime();

          return (
            <button
              key={day}
              disabled={isPast}
              onClick={() => onSelect(date)}
              className={cn(
                "w-full aspect-square flex items-center justify-center text-[11px] rounded-lg transition-all duration-150",
                isPast && "text-[#2a3936]/20 cursor-not-allowed",
                !isPast && !isSelected && "text-[#2a3936] hover:bg-[#4b6753]/10",
                isSelected && "bg-[#4b6753] text-white font-medium",
                isToday && !isSelected && "ring-1 ring-[#4b6753]/30"
              )}
            >
              {day}
            </button>
          );
        })}
      </div>

      <div className="flex gap-2 mt-3 pt-3 border-t border-[#2a3936]/5">
        <button
          onClick={() => onSelect(new Date())}
          className="flex-1 text-[10px] text-[#4b6753] font-medium uppercase tracking-wider py-1.5 hover:bg-[#4b6753]/5 rounded-lg transition-colors"
        >
          Today
        </button>
        <button
          onClick={() => {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            onSelect(tomorrow);
          }}
          className="flex-1 text-[10px] text-[#4b6753] font-medium uppercase tracking-wider py-1.5 hover:bg-[#4b6753]/5 rounded-lg transition-colors"
        >
          Tomorrow
        </button>
      </div>
    </div>
  );
}

/* ────────────── Guests Row ────────────── */

function GuestsRow({ adults, onChange }: { adults: number; onChange: (n: number) => void }) {
  return (
    <div className="flex items-center justify-between py-3">
      <div>
        <p className="text-sm text-[#2a3936] font-medium">Adults</p>
        <p className="text-[10px] text-[#2a3936]/40">18+ years</p>
      </div>
      <div className="flex items-center gap-3">
        <button
          disabled={adults <= 1}
          onClick={() => onChange(Math.max(1, adults - 1))}
          className={cn(
            "w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-200 text-lg leading-none",
            adults <= 1
              ? "border-[#2a3936]/10 text-[#2a3936]/20 cursor-not-allowed"
              : "border-[#2a3936]/20 text-[#2a3936] hover:border-[#4b6753] hover:text-[#4b6753] hover:bg-[#4b6753]/5"
          )}
        >
          −
        </button>
        <span className="w-6 text-center text-sm font-medium text-[#2a3936] tabular-nums">{adults}</span>
        <button
          disabled={adults >= 4}
          onClick={() => onChange(Math.min(4, adults + 1))}
          className={cn(
            "w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-200 text-lg leading-none",
            adults >= 4
              ? "border-[#2a3936]/10 text-[#2a3936]/20 cursor-not-allowed"
              : "border-[#2a3936]/20 text-[#2a3936] hover:border-[#4b6753] hover:text-[#4b6753] hover:bg-[#4b6753]/5"
          )}
        >
          +
        </button>
      </div>
    </div>
  );
}

/* ────────────── Main Widget ────────────── */

export default function BookingWidget() {
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [adults, setAdults] = useState(2);
  const [mobileStep, setMobileStep] = useState<"none" | "checkin" | "checkout" | "guests">("none");
  const [desktopOpenCheckin, setDesktopOpenCheckin] = useState(false);
  const [desktopOpenCheckout, setDesktopOpenCheckout] = useState(false);
  const [desktopOpenGuests, setDesktopOpenGuests] = useState(false);
  const [error, setError] = useState("");

  // Close desktop dropdowns on outside click
  useEffect(() => {
    function handle(e: MouseEvent) {
      const t = e.target as HTMLElement;
      if (!t.closest("[data-booking-dropdown]")) {
        setDesktopOpenCheckin(false);
        setDesktopOpenCheckout(false);
        setDesktopOpenGuests(false);
      }
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  const buildBookingUrl = () => {
    const base = "https://www.booking.com/searchresults.html";
    const params = new URLSearchParams({
      ss: "Riad+Les+Trois+Mages+Marrakech",
      checkin: checkIn ? formatISO(checkIn) : "",
      checkout: checkOut ? formatISO(checkOut) : "",
      group_adults: String(adults),
      group_children: "0",
      no_rooms: "1",
    });
    return `${base}?${params.toString()}`;
  };

  const handleBook = useCallback(() => {
    if (!checkIn || !checkOut) {
      setError("Please select check-in and check-out dates");
      return;
    }
    if (checkOut <= checkIn) {
      setError("Check-out must be after check-in");
      return;
    }
    setError("");
    window.open(buildBookingUrl(), "_blank");
  }, [checkIn, checkOut, adults]);

  const nightCount = checkIn && checkOut
    ? Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))
    : 0;

  return (
    <>
      {/* ═══════════════ DESKTOP ═══════════════ */}
      <div className="hidden md:block fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-4xl">
        <div className="relative bg-white/95 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-[#2a3936]/5 rounded-2xl px-3 py-2.5">
          <div className="flex items-center gap-2 lg:gap-3">
            <div className="flex items-center gap-2 flex-1 min-w-0">
              {/* Check-in */}
              <div className="relative flex-1 min-w-0" data-booking-dropdown>
                <button
                  onClick={() => { setDesktopOpenCheckin(!desktopOpenCheckin); setDesktopOpenCheckout(false); setDesktopOpenGuests(false); }}
                  className="w-full flex items-center gap-2.5 px-4 py-3 bg-[#f6f4f2] hover:bg-[#ede9e5] rounded-xl transition-colors text-left"
                >
                  <svg className="w-4 h-4 text-[#4b6753] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                  </svg>
                  <div className="min-w-0">
                    <p className="text-[9px] text-[#2a3936]/40 uppercase tracking-wider font-medium">Check-in</p>
                    <p className="text-xs font-medium text-[#2a3936] truncate mt-0.5">
                      {checkIn ? formatDate(checkIn) : "Select date"}
                    </p>
                  </div>
                </button>
                {desktopOpenCheckin && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-[60] w-[300px]">
                    <CalendarPanel
                      selectedDate={checkIn}
                      onSelect={(d) => { setCheckIn(d); setError(""); setDesktopOpenCheckin(false); }}
                      label="Check-in"
                      minDate={new Date()}
                    />
                  </div>
                )}
              </div>

              <div className="w-px h-8 bg-[#2a3936]/10 shrink-0" />

              {/* Check-out */}
              <div className="relative flex-1 min-w-0" data-booking-dropdown>
                <button
                  onClick={() => { setDesktopOpenCheckout(!desktopOpenCheckout); setDesktopOpenCheckin(false); setDesktopOpenGuests(false); }}
                  className="w-full flex items-center gap-2.5 px-4 py-3 bg-[#f6f4f2] hover:bg-[#ede9e5] rounded-xl transition-colors text-left"
                >
                  <svg className="w-4 h-4 text-[#4b6753] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                  </svg>
                  <div className="min-w-0">
                    <p className="text-[9px] text-[#2a3936]/40 uppercase tracking-wider font-medium">Check-out</p>
                    <p className="text-xs font-medium text-[#2a3936] truncate mt-0.5">
                      {checkOut ? formatDate(checkOut) : "Select date"}
                    </p>
                  </div>
                </button>
                {desktopOpenCheckout && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-[60] w-[300px]">
                    <CalendarPanel
                      selectedDate={checkOut}
                      onSelect={(d) => { setCheckOut(d); setError(""); setDesktopOpenCheckout(false); }}
                      label="Check-out"
                      minDate={checkIn || new Date()}
                    />
                  </div>
                )}
              </div>

              <div className="w-px h-8 bg-[#2a3936]/10 shrink-0" />

              {/* Guests */}
              <div className="relative flex-1 min-w-0" data-booking-dropdown>
                <button
                  onClick={() => { setDesktopOpenGuests(!desktopOpenGuests); setDesktopOpenCheckin(false); setDesktopOpenCheckout(false); }}
                  className="w-full flex items-center gap-2.5 px-4 py-3 bg-[#f6f4f2] hover:bg-[#ede9e5] rounded-xl transition-colors text-left"
                >
                  <svg className="w-4 h-4 text-[#4b6753] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                  </svg>
                  <div className="min-w-0">
                    <p className="text-[9px] text-[#2a3936]/40 uppercase tracking-wider font-medium">Guests</p>
                    <p className="text-xs font-medium text-[#2a3936] mt-0.5">
                      {adults} {adults === 1 ? "Adult" : "Adults"}
                    </p>
                  </div>
                </button>
                {desktopOpenGuests && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-[60] w-[260px]">
                    <div className="bg-white rounded-2xl p-4 shadow-[0_16px_48px_rgba(0,0,0,0.12)]">
                      <GuestsRow adults={adults} onChange={setAdults} />
                      <button onClick={() => setDesktopOpenGuests(false)} className="w-full mt-3 py-2.5 bg-[#4b6753] text-white text-[10px] font-semibold uppercase tracking-[0.15em] rounded-xl hover:bg-[#3d5645] transition-colors">
                        Done
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={handleBook}
              className="px-6 lg:px-8 py-3 bg-[#4b6753] text-white text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.15em] hover:bg-[#3d5645] active:scale-[0.97] transition-all duration-200 shrink-0 rounded-xl"
            >
              {nightCount > 0 ? `BOOK · ${nightCount}N` : "CHECK AVAILABILITY"}
            </button>
          </div>
          {error && <p className="text-[10px] text-red-500 mt-2 px-1">{error}</p>}
        </div>
      </div>

      {/* ═══════════════ MOBILE ═══════════════ */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 pointer-events-none">
        {/* Step panel — above the bar */}
        {mobileStep !== "none" && (
          <div className="pointer-events-auto bg-[#f6f4f2] border-t border-[#2a3936]/10 px-4 py-4 max-h-[60vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-3">
              <button onClick={() => setMobileStep("none")} className="text-[#4b6753] text-xs font-medium">Cancel</button>
              <p className="text-sm font-medium text-[#2a3936]">
                {mobileStep === "checkin" ? "Check-in" : mobileStep === "checkout" ? "Check-out" : "Guests"}
              </p>
              <div className="w-12" />
            </div>

            {mobileStep === "checkin" && (
              <CalendarPanel
                selectedDate={checkIn}
                onSelect={(d) => { setCheckIn(d); setError(""); setMobileStep("checkout"); }}
                label="Arrival date"
                minDate={new Date()}
              />
            )}
            {mobileStep === "checkout" && (
              <CalendarPanel
                selectedDate={checkOut}
                onSelect={(d) => { setCheckOut(d); setError(""); setMobileStep("none"); }}
                label="Departure date"
                minDate={checkIn || new Date()}
              />
            )}
            {mobileStep === "guests" && (
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <GuestsRow adults={adults} onChange={setAdults} />
                <button onClick={() => setMobileStep("none")} className="w-full mt-3 py-2.5 bg-[#4b6753] text-white text-[10px] font-semibold uppercase tracking-[0.15em] rounded-xl hover:bg-[#3d5645] transition-colors">
                  Done
                </button>
              </div>
            )}
          </div>
        )}

        {/* Bottom bar */}
        <div className="pointer-events-auto bg-white/95 backdrop-blur-xl border-t border-[#2a3936]/10 px-4 py-3 safe-area-pb">
          {error && <p className="text-[10px] text-red-500 mb-2">{error}</p>}

          <div className="flex gap-2 mb-2.5">
            <button
              onClick={() => setMobileStep(mobileStep === "checkin" ? "none" : "checkin")}
              className={cn(
                "flex-1 flex items-center gap-2 px-3 py-2.5 rounded-xl transition-colors text-left",
                mobileStep === "checkin" ? "bg-[#4b6753]/10 ring-1 ring-[#4b6753]/30" : "bg-[#f6f4f2]"
              )}
            >
              <svg className="w-3.5 h-3.5 text-[#4b6753] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
              <div className="min-w-0">
                <p className="text-[8px] text-[#2a3936]/40 uppercase tracking-wider">In</p>
                <p className="text-[11px] font-medium text-[#2a3936] truncate">{checkIn ? formatDate(checkIn) : "—"}</p>
              </div>
            </button>

            <button
              onClick={() => setMobileStep(mobileStep === "checkout" ? "none" : "checkout")}
              className={cn(
                "flex-1 flex items-center gap-2 px-3 py-2.5 rounded-xl transition-colors text-left",
                mobileStep === "checkout" ? "bg-[#4b6753]/10 ring-1 ring-[#4b6753]/30" : "bg-[#f6f4f2]"
              )}
            >
              <svg className="w-3.5 h-3.5 text-[#4b6753] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
              <div className="min-w-0">
                <p className="text-[8px] text-[#2a3936]/40 uppercase tracking-wider">Out</p>
                <p className="text-[11px] font-medium text-[#2a3936] truncate">{checkOut ? formatDate(checkOut) : "—"}</p>
              </div>
            </button>

            <button
              onClick={() => setMobileStep(mobileStep === "guests" ? "none" : "guests")}
              className={cn(
                "flex items-center gap-2 px-3 py-2.5 rounded-xl transition-colors text-left",
                mobileStep === "guests" ? "bg-[#4b6753]/10 ring-1 ring-[#4b6753]/30" : "bg-[#f6f4f2]"
              )}
            >
              <svg className="w-3.5 h-3.5 text-[#4b6753] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
              </svg>
              <div className="min-w-0">
                <p className="text-[8px] text-[#2a3936]/40 uppercase tracking-wider">Guests</p>
                <p className="text-[11px] font-medium text-[#2a3936]">{adults}</p>
              </div>
            </button>
          </div>

          <button
            onClick={handleBook}
            className="w-full py-3 bg-[#4b6753] text-white text-[11px] font-semibold uppercase tracking-[0.15em] hover:bg-[#3d5645] active:scale-[0.98] transition-all duration-200 rounded-xl"
          >
            {nightCount > 0 ? `CHECK AVAILABILITY · ${nightCount} NIGHT${nightCount !== 1 ? "S" : ""}` : "CHECK AVAILABILITY"}
          </button>
        </div>
      </div>
    </>
  );
}
