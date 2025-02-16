export default function CulturalTips() {
    const culturalTips = [
      'Always bow when greeting someone. The deeper the bow, the more respect you show.',
      'Remove your shoes before entering someone’s home or a traditional restaurant.',
      'Avoid eating or drinking while walking in public.',
      'Do not tip in Japan; it is considered rude.',
      'Be punctual; Japanese culture values timeliness.',
    ];
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Cultural Tips for Japan</h2>
        <ul className="space-y-3">
          {culturalTips.map((tip, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-700">{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }