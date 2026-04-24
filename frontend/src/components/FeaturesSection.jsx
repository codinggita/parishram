const categoriesData = [
  {
    title: 'Student Management',
    tags: ['Enrollment', 'Profiles'],
    icon: '🎓',
    bgColor: 'bg-red-50'
  },
  {
    title: 'Teacher Portal',
    tags: ['Lesson Plans', 'Grading'],
    icon: '👨‍🏫',
    bgColor: 'bg-orange-50'
  },
  {
    title: 'Finance & Fees',
    tags: ['Invoices', 'Receipts'],
    icon: '💳',
    bgColor: 'bg-blue-50'
  },
  {
    title: 'Communication Hub',
    tags: ['SMS', 'Email'],
    icon: '💬',
    bgColor: 'bg-purple-50'
  },
  {
    title: 'Exams & Results',
    tags: ['Report Cards', 'Analytics'],
    icon: '📊',
    bgColor: 'bg-green-50'
  },
  {
    title: 'Library & Inventory',
    tags: ['Books', 'Assets'],
    icon: '📚',
    bgColor: 'bg-yellow-50'
  }
];

const FeaturesSection = () => {
  return (
    <section className="bg-white py-20" id="features">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Core Modules</h2>
          <p className="text-gray-500 text-lg">Parishram covers every aspect of school management. Explore the modules below.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoriesData.map((cat, idx) => (
            <div className="border border-gray-200 rounded-2xl p-8 relative overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 group cursor-pointer" key={idx}>
              
              {/* Decorative Circle Background */}
              <div className={`absolute -right-12 -bottom-12 w-40 h-40 rounded-full ${cat.bgColor} transition-transform duration-300 group-hover:scale-110`}></div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-6 relative z-10">{cat.title}</h3>
              
              <div className="flex gap-2 mb-10 relative z-10">
                {cat.tags.map(tag => (
                  <span key={tag} className="px-4 py-1.5 rounded-full border border-gray-200 text-sm text-gray-600 bg-white shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-end relative z-10">
                <div className="text-gray-600 font-medium flex items-center gap-2 hover:text-accentPrimary transition-colors">
                  Explore Module
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                
                <div className="text-5xl drop-shadow-md transform transition-transform group-hover:-translate-y-2">
                  {cat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
