import { useParams } from "react-router-dom";
import { CaseStudies } from "@/data/CaseStudies";

export default function CaseStudy() {
  const { slug } = useParams();
  const project = CaseStudies[slug];

  if (!project) {
    return <div className="p-20 text-center">Project Not Found</div>;
  }

  return (
    <div className="container mx-auto px-6 py-20 max-w-5xl">

      <h1 className="text-4xl font-bold mb-4">
        {project.title}
      </h1>

      <p className="text-muted-foreground mb-10">
        {project.description}
      </p>

      {/* Tech Stack */}
      <h2 className="text-2xl font-semibold mb-4">
        Tech Stack
      </h2>

      <div className="flex flex-wrap gap-2 mb-10">
        {project.tags.map((tag, i) => (
          <span key={i} className="px-3 py-1 border rounded-md text-sm">
            {tag}
          </span>
        ))}
      </div>

      {/* Problem */}
      <h2 className="text-2xl font-semibold mb-4">
        Problem
      </h2>
      <p className="mb-10">{project.problem}</p>

      {/* Solution */}
      <h2 className="text-2xl font-semibold mb-4">
        Solution
      </h2>
      <p className="mb-10">{project.solution}</p>

      {/* Architecture */}
      <h2 className="text-2xl font-semibold mb-4">
        System Architecture
      </h2>
      <img
        src="/architecture/examnotes.png"
        className="rounded-xl border"
      />
      <ul className="space-y-2 mb-10">
        {project.architecture.map((a, i) => (
          <li key={i}>✔ {a}</li>
        ))}
      </ul>

      {/* Features */}
      <h2 className="text-2xl font-semibold mb-4">
        Features
      </h2>
      <ul className="space-y-2 mb-10">
        {project.features.map((f, i) => (
          <li key={i}>✔ {f}</li>
        ))}
      </ul>

      {/* screenshort */}
      <h2 className="text-2xl font-semibold mt-14 mb-6">
        Screenshots
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        <img src="/screenshots/1.png" className="rounded-xl" />
        <img src="/screenshots/2.png" className="rounded-xl" />
        <img src="/screenshots/3.png" className="rounded-xl" />
      </div>

      {/* API */}
      <h2 className="text-2xl font-semibold mb-4">
        API Endpoints
      </h2>
      <ul className="space-y-2 mb-10">
        {project.apis.map((api, i) => (
          <li key={i}>{api}</li>
        ))}
      </ul>

      {/* Database */}
      <h2 className="text-2xl font-semibold mb-4">
        Database Schema
      </h2>
      <ul className="space-y-2">
        {project.database.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>
    </div>
  );
}
