import { Chart } from '@/components/shared/Chart';
import { ChartConfig } from '@/components/ui/chart';
import { TAdminTrip } from '@/lib/types';
import { AdminTrips } from '../admin/trips';

const chartDataForTrips = [
  { month: 'Mar:2024', value: 237 },
  { month: 'Apr:2024', value: 73 },
  { month: 'May:2024', value: 209 },
  { month: 'Jun:2024', value: 214 },
  { month: 'Jul:2023', value: 78 },
  { month: 'Aug:2023', value: 190 },
];

const chartDataForTripRequest = [
  { month: 'Mar:2024', value: 190 },
  { month: 'Apr:2024', value: 438 },
  { month: 'May:2024', value: 342 },
  { month: 'Jun:2024', value: 132 },
  { month: 'Jul:2023', value: 120 },
  { month: 'Aug:2023', value: 98 },
];

const chartDataForUser = [
  { month: 'Mar:2024', value: 200 },
  { month: 'Apr:2024', value: 120 },
  { month: 'May:2024', value: 98 },
  { month: 'Jun:2024', value: 76 },
  { month: 'Jul:2023', value: 120 },
  { month: 'Aug:2023', value: 140 },
];

type TProps = {
  trips: TAdminTrip[];
};

export const Dashboard = ({ trips }: TProps) => {
  return (
    <main className=''>
      <div className='grid items-center gap-6 md:grid-cols-3'>
        <Chart
          title='Trips'
          description='All the trips since last 6 months'
          chartConfig={{
            value: {
              label: 'Trip',
              color: '#098637',
            },
          }}
          chartData={chartDataForTrips}
        />
        <Chart
          title='Trip Requests'
          description='All the trips since last 6 months'
          chartConfig={{
            value: {
              label: 'Trip Request',
              color: '#098637',
            },
          }}
          chartData={chartDataForTripRequest}
          fillColor='#0f3f39'
        />

        <Chart
          title='Users'
          description='User joined since last 6 months'
          chartConfig={{
            value: {
              label: 'Users',
              color: '#098637',
            },
          }}
          chartData={chartDataForUser}
          fillColor='#4b847c'
        />
      </div>
      {/* lates trips */}
      <div className='mt-12'>
        <h3 className='text-lg font-semibold'>Latest Trips.</h3>
        <AdminTrips trips={trips.slice(10)} />
      </div>
    </main>
  );
};
