'use client'
import { FaVolumeUp } from 'react-icons/fa';

export default function Phrasebook() {
  const phrases = [
    {
      japanese: 'こんにちは',
      english: 'Hello',
      audio: 'https://www.japanesepod101.com/japanese-phrases/konnichiwa.mp3',
    },
    {
      japanese: 'ありがとう',
      english: 'Thank you',
      audio: 'https://www.japanesepod101.com/japanese-phrases/arigatou.mp3',
    },
    {
      japanese: 'すみません',
      english: 'Excuse me / Sorry',
      audio: 'https://www.japanesepod101.com/japanese-phrases/sumimasen.mp3',
    },
    {
      japanese: 'お願いします',
      english: 'Please',
      audio: 'https://www.japanesepod101.com/japanese-phrases/onegaishimasu.mp3',
    },
    {
      japanese: 'はい',
      english: 'Yes',
      audio: 'https://www.japanesepod101.com/japanese-phrases/hai.mp3',
    },
    {
      japanese: 'いいえ',
      english: 'No',
      audio: 'https://www.japanesepod101.com/japanese-phrases/iie.mp3',
    },
  ];

  const playAudio = (audioUrl) => {
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Japanese Phrasebook</h2>
      <div className="space-y-4">
        {phrases.map((phrase, index) => (
          <div key={index} className="p-4 border rounded-lg flex justify-between items-center">
            <div>
              <p className="text-lg font-semibold">{phrase.japanese}</p>
              <p className="text-sm text-gray-600">{phrase.english}</p>
            </div>
            <button
              onClick={() => playAudio(phrase.audio)}
              className="p-2 text-blue-600 hover:text-blue-800"
            >
              <FaVolumeUp size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}