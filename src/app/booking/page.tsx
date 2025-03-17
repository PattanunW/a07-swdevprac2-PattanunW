import DateReserve from "@/components/DateReserve";
import { TextField } from "@mui/material";

export default function () {
  return (
    <main className="w-[100%] flex flex-col items-center space-y-5 ">
      <div className="text-xl font-medium">New Booking</div>

      <div className="w-fit space-y-2 ">
        <div className="text-xl text-left text-gray-600 font-medium"> Firstname - Lastname </div>
        <div>
          <TextField
            variant="standard"
            name="Name-Lastname"
            label="Name-Lastname"
          />
        </div>

        <div className="text-x text-left text-gray-600">Contact</div>
        <div>
          <TextField
            variant="standard"
            name="Contact-Number"
            label="Contact-Number"
          />
        </div>
      </div>
      <DateReserve />
      <button
        className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
        name="Book Venue"
      >
        Book Venue
      </button>
    </main>
  );
}
