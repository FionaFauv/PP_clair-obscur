'use client';

import TitleSection from "../components/[front-site]/list-pictos/title-section";
import StatSection from "../components/[front-site]/list-pictos/stat-section";
import { usePictosFilter } from '@/lib/pictos-filter';

export default function PictosPage() {
  const filterData = usePictosFilter();

  return (
    <div className="min-h-screen p-5 animate-fade-in">
      <div className="max-w-7xl mx-auto card-large">
        <TitleSection filterData={filterData} />
        <StatSection filterData={filterData} />
      </div>
    </div>
  );
}
