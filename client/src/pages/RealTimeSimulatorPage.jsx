import React from "react";
import RealTimeSimulator from "../components/RealTimeSimulator";
import { useScheduling } from "../SchedulingContext";

const RealTimeSimulatorPage = () => {
  // Use context to get processes, algorithm, and timeQuantum
  const { processes, selectedAlgorithm, timeQuantum } = useScheduling();

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">Real-Time Simulator Engine</h1>
      <RealTimeSimulator
        algorithm={selectedAlgorithm}
        processes={processes}
        timeQuantum={timeQuantum || 2}
      />
    </div>
  );
};

export default RealTimeSimulatorPage; 