import DashboardSkeleton from '@/app/ui/skeletons'; //statt den loading schriftzug sieht man hier einen dashboard content in grau laden

export default function Loading() {
    //return <div>Loading...</div>;
    return <DashboardSkeleton />;
}