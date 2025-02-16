export default function Etiquette() {
    const etiquetteTips = [
      'Use both hands when giving or receiving something, especially business cards.',
      'Do not point at people or objects with your finger; use an open hand instead.',
      'Avoid blowing your nose in public; it is considered impolite.',
      'Do not pour your own drink; pour for others and let them pour for you.',
      'Always say "itadakimasu" before eating and "gochisousama deshita" after finishing a meal.',
    ];
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Etiquette in Japan</h2>
        <ul className="space-y-3">
          {etiquetteTips.map((tip, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-700">{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }