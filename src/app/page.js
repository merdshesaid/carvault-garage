"use client";

import { useState, useEffect } from "react";
import { Car, Wrench, Fuel, Euro } from "lucide-react";
import { supabase } from "../../lib/supabase";

export default function Home() {
  const [cars, setCars] = useState([]);

  const [form, setForm] = useState({
    brand: "",
    model: "",
    year: "",
    fuel: "",
    gearbox: "",
    drivetrain: "",
    mileage: "",
  });

  useEffect(() => {
    loadCars();
  }, []);

  async function loadCars() {
    const { data, error } = await supabase
      .from("cars")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      return;
    }

    setCars(data);
  }

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function addCar() {
    if (!form.brand || !form.model) {
      alert("Please enter a brand and model.");
      return;
    }

    const { error } = await supabase.from("cars").insert([
      {
        brand: form.brand,
        model: form.model,
        year: Number(form.year),
        fuel: form.fuel,
        gearbox: form.gearbox,
        drivetrain: form.drivetrain,
        mileage: Number(form.mileage),
      },
    ]);

    if (error) {
      console.error(error);
      alert(error.message);
      return;
    }

    setForm({
      brand: "",
      model: "",
      year: "",
      fuel: "",
      gearbox: "",
      drivetrain: "",
      mileage: "",
    });

    loadCars();
  }

  return (
    <main className="min-h-screen bg-[#0d1117] text-white p-8">
      <header className="mb-10">
        <h1 className="text-4xl font-bold">
          CarVault 🚗
        </h1>

        <p className="text-gray-400 mt-2">
          Track your cars, maintenance and expenses.
        </p>
      </header>

      <section className="grid md:grid-cols-4 gap-5 mb-10">
        <Card
          icon={<Car />}
          title="My Cars"
          value={cars.length}
        />

        <Card
          icon={<Wrench />}
          title="Services"
          value="24"
        />

        <Card
          icon={<Fuel />}
          title="Fuel Records"
          value="156"
        />

        <Card
          icon={<Euro />}
          title="Total Spent"
          value="€4,350"
        />
      </section>

      <section className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 mb-10">
        <h2 className="text-2xl font-bold mb-5">
          Add New Car
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            name="brand"
            placeholder="Brand"
            value={form.brand}
            onChange={handleChange}
            className="bg-[#0d1117] p-3 rounded"
          />

          <input
            name="model"
            placeholder="Model"
            value={form.model}
            onChange={handleChange}
            className="bg-[#0d1117] p-3 rounded"
          />

          <input
            name="year"
            placeholder="Year"
            value={form.year}
            onChange={handleChange}
            className="bg-[#0d1117] p-3 rounded"
          />

          <input
            name="fuel"
            placeholder="Fuel"
            value={form.fuel}
            onChange={handleChange}
            className="bg-[#0d1117] p-3 rounded"
          />

          <input
            name="gearbox"
            placeholder="Transmission"
            value={form.gearbox}
            onChange={handleChange}
            className="bg-[#0d1117] p-3 rounded"
          />

          <input
            name="drivetrain"
            placeholder="Drivetrain"
            value={form.drivetrain}
            onChange={handleChange}
            className="bg-[#0d1117] p-3 rounded"
          />

          <input
            name="mileage"
            placeholder="Mileage"
            value={form.mileage}
            onChange={handleChange}
            className="bg-[#0d1117] p-3 rounded md:col-span-2"
          />
        </div>

        <button
          onClick={addCar}
          className="mt-5 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-bold"
        >
          Add Car
        </button>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-5">
          Your Vehicles
        </h2>

        {cars.length === 0 && (
          <p className="text-gray-400">
            No cars added yet.
          </p>
        )}

        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 mb-6"
          >
            <h3 className="text-xl font-bold">
              {car.brand} {car.model}
            </h3>

            <p className="text-gray-400 mt-2">
              {car.year} • {car.fuel} • {car.gearbox} • {car.drivetrain}
            </p>

            <div className="mt-5 grid md:grid-cols-3 gap-4">
              <Info
                title="Mileage"
                value={`${car.mileage} km`}
              />

              <Info
                title="Next Service"
                value="Not set"
              />

              <Info
                title="Last Cost"
                value="€0"
              />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

function Card({ icon, title, value }) {
  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
      <div className="text-blue-400">{icon}</div>

      <p className="text-gray-400 mt-4">
        {title}
      </p>

      <h2 className="text-3xl font-bold">
        {value}
      </h2>
    </div>
  );
}

function Info({ title, value }) {
  return (
    <div className="bg-[#0d1117] rounded-lg p-4">
      <p className="text-gray-400">
        {title}
      </p>

      <p className="font-bold mt-1">
        {value}
      </p>
    </div>
  );
}