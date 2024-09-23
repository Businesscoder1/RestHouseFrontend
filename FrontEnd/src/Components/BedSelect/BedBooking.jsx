import React, { useState, useEffect } from 'react';
import './BedBooking.css';

const BedBooking = () => {
  const [selectedDateRange, setSelectedDateRange] = useState({ start: null, end: null });
  const [beds, setBeds] = useState(Array(17).fill('available')); // 17 beds, all available initially
  const [bookedBedsCount, setBookedBedsCount] = useState(0);

  // Simulate real-time bed status from a server
  useEffect(() => {
    // Fetch real-time bed data (you'll replace this with a real API call)
    const fetchBedStatus = async () => {
      
      const initialStatus = ['available', 'available', 'booked', 'available', 'available', 'available', 'booked', ...Array(10).fill('available')];
      setBeds(initialStatus);
      setBookedBedsCount(initialStatus.filter(bed => bed === 'booked').length);
    };
    fetchBedStatus();
  }, []);

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setSelectedDateRange(prev => ({ ...prev, [name]: value }));
  };

  const handleBedClick = (index) => {
    if (beds[index] === 'booked') return; // Prevent booking already booked beds
    const updatedBeds = beds.slice();
    updatedBeds[index] = updatedBeds[index] === 'available' ? 'booked' : 'available';
    setBeds(updatedBeds);
    setBookedBedsCount(updatedBeds.filter(bed => bed === 'booked').length);
  };

  return (
    <div className="bed-booking">
      <h2>Rest House Bed Booking</h2>
      <div className="calendar">
        <label>Start Date: <input type="date" name="start" value={selectedDateRange.start || ''} onChange={handleDateChange} /></label>
        <label>End Date: <input type="date" name="end" value={selectedDateRange.end || ''} onChange={handleDateChange} /></label>
      </div>
      <div className="bed-grid">
        {beds.map((status, index) => (
          <div
            key={index}
            className={`bed ${status}`}
            onClick={() => handleBedClick(index)}
          >
            Bed {index + 1}
          </div>
        ))}
      </div>
      <div className="bed-status">
        <p>Total Beds: 17</p>
        <p>Booked Beds: {bookedBedsCount}</p>
        <p>Available Beds: {17 - bookedBedsCount}</p>
      </div>
    </div>
  );
};

export default BedBooking;
