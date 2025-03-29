export interface Application {
    id: string;
    channel: 'Web' | 'Mobile' | 'Partner API' | 'Internal';
    screenings: number;
    status: 'Accepted' | 'Transferred' | 'Errored';
  }
  
  export interface TimeDataPoint {
    name: string; // e.g., 'Jan', 'Feb', 'Day 1', 'Day 2'
    requests: number;
  }
  
  export interface DashboardData {
    applications: Application[];
    requestCounts: TimeDataPoint[];
  }
  
  // Generate more realistic mock data if needed
  const generateApplications = (count: number, period: string): Application[] => {
    const statuses: Application['status'][] = ['Accepted', 'Transferred', 'Errored'];
    const channels: Application['channel'][] = ['Web', 'Mobile', 'Partner API', 'Internal'];
    return Array.from({ length: count }, (_, i) => ({
      id: `${period}-app-${String(i + 1).padStart(4, '0')}`,
      channel: channels[Math.floor(Math.random() * channels.length)],
      screenings: Math.floor(Math.random() * 5) + 1,
      status: statuses[Math.floor(Math.random() * statuses.length)],
    }));
  };
  
  const generateTimeData = (points: number, labelPrefix: string, maxVal: number): TimeDataPoint[] => {
    return Array.from({ length: points }, (_, i) => ({
      name: `${labelPrefix} ${i + 1}`,
      requests: Math.floor(Math.random() * maxVal) + 10, // Add base value
    }));
  }
  
  export const MOCK_DATA: { [key: string]: DashboardData } = {
    day: {
      applications: generateApplications(50, 'd'),
      requestCounts: generateTimeData(24, 'Hr', 50), // Hourly for a day
    },
    month: {
      applications: generateApplications(300, 'm'),
      requestCounts: generateTimeData(30, 'Day', 200), // Daily for a month
    },
    year: {
      applications: generateApplications(2000, 'y'),
      requestCounts: generateTimeData(12, 'Month', 1000), // Monthly for a year
    }
  };
  
  export const getFilteredData = (filter: 'day' | 'month' | 'year'): DashboardData => {
    return MOCK_DATA[filter];
  };