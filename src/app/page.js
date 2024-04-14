import DataTable from "@/components/DataTable";
import Hero from "@/components/Hero";
import Image from "next/image";



export default function Home() {
  return (
    <>
      <Hero />
      <div className="container px-5 py-24 mx-auto">
        <h1>Approach 2: BigQuery Report Dashboard</h1>
        <div className="container">
          <iframe width="1280" height="800" src="https://lookerstudio.google.com/embed/reporting/d1cfd21e-dc02-4fd0-8aa1-b47b14d22d86/page/keDQB" frameBorder="0" style={{ border: "0" }} allowfullscreen sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"></iframe>
        </div>
      </div>

    </>
  );
}
