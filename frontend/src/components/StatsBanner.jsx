const statsData = [
  { icon: '🔴', label: 'Daily Live', sub: 'Interactive classes' },
  { icon: '📝', label: '10 Million +', sub: 'Tests, sample papers & notes' },
  { icon: '💡', label: '24 x 7', sub: 'Doubt solving sessions' },
  { icon: '🏫', label: '100 +', sub: 'Partner institutions' },
];

const StatsBanner = () => {
  return (
    <section className="bg-bgSecondary py-10">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 py-8 px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-2">
                <span className="text-3xl mb-1">{stat.icon}</span>
                <h3 className="text-xl font-bold text-gray-900">{stat.label}</h3>
                <p className="text-gray-500 text-sm">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
