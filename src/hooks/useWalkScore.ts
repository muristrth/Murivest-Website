// hooks/useWalkScore.ts
import useSWR from 'swr';

interface WalkScoreData {
  walkscore: number;
  transit?: { score: number };
  bike?: { score: number };
  description?: string;
}

export function useWalkScore(propertyId?: string, lat?: number, lon?: number) {
  const shouldFetch = propertyId || (lat && lon);
  
  const { data, error, isLoading } = useSWR<WalkScoreData>(
    shouldFetch ? `/api/walkscore?${propertyId ? `propertyId=${propertyId}` : `lat=${lat}&lon=${lon}`}` : null,
    async (url: string) => {
      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to fetch walk score');
      return res.json();
    },
    {
      revalidateOnFocus: false,
      dedupingInterval: 60000, // 1 minute
    }
  );

  return {
    walkScore: data?.walkscore ?? 0,
    transitScore: data?.transit?.score ?? null,
    bikeScore: data?.bike?.score ?? null,
    description: data?.description,
    isLoading,
    error,
  };
}