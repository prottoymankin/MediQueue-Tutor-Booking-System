"use client";

import DateInput from "@/components/shared/DateInput";
import TutorCard from "@/components/Tutors/TutorCard";
import { Button, Label, SearchField, Spinner } from "@heroui/react";
import { useEffect, useState } from "react";
import { LuRefreshCcw } from "react-icons/lu";

const TutorsPage = () => {
  const [searchInput, setSerachInput] = useState("");
  const [tutors, setTutors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const fetchTutors = async () => {
    setIsLoading(true);
    const response = await fetch("http://localhost:5000/tutors");
    const data = await response.json();
    setTutors(data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchTutors();
  },[]);

  const handleSearch = async () => {
    setIsLoading(true);
    const response = await fetch(`http://localhost:5000/api/tutors/search?search=${searchInput}`);
    const searchedTutors = await response.json();
    
    setTutors(searchedTutors);
    setIsLoading(false);
  }

  const handleFilterByDate = async () => {
    setIsLoading(true);
    const response = await fetch(`http://localhost:5000/api/tutors/filter-by-date?startDate=${startDate}&endDate=${endDate}`);
    const filteredTutors = await response.json();
    
    setTutors(filteredTutors);
    setIsLoading(false);
  }

  const handleDefault = () => {
    setIsLoading(true);
    fetchTutors();
    setStartDate("");
    setEndDate("");
    setIsLoading(false);
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-15 space-y-10 w-full">
      <header className="space-y-1">
        <h2 
          className="font-bold text-slate-900 dark:text-slate-50 text-3xl"
        >
          Explore Our Tutors
        </h2>

        <p className="max-w-lg text-slate-600 dark:text-slate-400">
          Browse experienced tutors by subject, schedule, and teaching style to find the right learning support for your academic journey.
        </p>
      </header>

      <div className="flex flex-col md:flex-row gap-4 md:items-end justify-between">
        <div className="flex flex-col sm:flex-row sm:items-end gap-2">
          <SearchField name="search" className={"max-w-sm"} onChange={setSerachInput}>
            <Label>Search by tutor name</Label>
            <SearchField.Group>
              <SearchField.SearchIcon />
              <SearchField.Input placeholder="Search..." />
              <SearchField.ClearButton />
            </SearchField.Group>
          </SearchField>

          <Button
            className={"bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 rounded-md"}
            onClick={handleSearch}
          >
            Search
          </Button>
        </div>

        <Button
          className={"bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 rounded-md"}
          onClick={handleDefault}
        >
          <LuRefreshCcw />
          Default
        </Button>
      </div>

      <div className="flex flex-col md:flex-row md:items-end gap-2">
        <DateInput 
          label={"Start Date"}
          setterFunc={setStartDate}
          value={startDate}
        />

        <DateInput 
          label={"End Date"} 
          setterFunc={setEndDate}
          value={endDate}
        />

        <Button
          className={"bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 rounded-md"}
          onClick={handleFilterByDate}
        >
          Filter by date
        </Button>
      </div>

      {
        isLoading ? (
          <div className="flex flex-col items-center justify-center gap-2 h-[50vh]">
            <Spinner size="xl" />
            <span className="text-xs text-muted"></span>
          </div>
        ) : (
          tutors.length === 0 ? (
            <p className="text-slate-900 dark:text-slate-100">No search result found</p>
          ) : (
            <div className="gap-6 grid sm:grid-cols-2 lg:grid-cols-3">
              {
                tutors.map(tutor => (
                  <TutorCard 
                    key={tutor._id}
                    tutor={tutor}
                  />
                ))
              }
            </div>
          )
        )
      }
    </section>
  );
};

export default TutorsPage;