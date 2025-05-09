'use client';

import { useState } from 'react';
import Link from 'next/link';

// 임시 데이터
const languages = ['C++', 'JavaScript', 'Python', 'Java'];

// 언어별 STL 데이터를 타입 안전하게 정의
interface STLItem {
  name: string;
  category: string;
  description: string;
}

type STLDataType = {
  [key: string]: STLItem[];
};

const stlData: STLDataType = {
  'C++': [
    { name: 'vector', category: '컨테이너', description: '동적 배열' },
    { name: 'map', category: '컨테이너', description: '키-값 쌍을 저장하는 연관 컨테이너' },
    { name: 'set', category: '컨테이너', description: '정렬된 고유 요소의 집합' },
    { name: 'sort', category: '알고리즘', description: '요소를 정렬' },
    { name: 'find', category: '알고리즘', description: '요소를 검색' },
  ],
  'JavaScript': [
    { name: 'Array', category: '자료구조', description: '배열 객체' },
    { name: 'Map', category: '자료구조', description: '키-값 쌍을 저장하는 객체' },
    { name: 'Set', category: '자료구조', description: '고유 값을 저장하는 객체' },
    { name: 'Array.prototype.sort()', category: '메서드', description: '배열 요소 정렬' },
    { name: 'Array.prototype.find()', category: '메서드', description: '조건을 만족하는 첫 번째 요소 반환' },
  ],
  'Python': [
    { name: 'list', category: '자료구조', description: '동적 배열' },
    { name: 'dict', category: '자료구조', description: '키-값 쌍을 저장하는 사전' },
    { name: 'set', category: '자료구조', description: '고유 요소의 집합' },
    { name: 'sorted()', category: '내장함수', description: '정렬된 새 리스트 반환' },
    { name: 'list.sort()', category: '메서드', description: '리스트를 정렬' },
  ],
  'Java': [
    { name: 'ArrayList', category: '컬렉션', description: '동적 배열' },
    { name: 'HashMap', category: '컬렉션', description: '키-값 쌍을 저장하는 맵' },
    { name: 'HashSet', category: '컬렉션', description: '고유 요소의 집합' },
    { name: 'Collections.sort()', category: '메서드', description: '컬렉션 정렬' },
    { name: 'Arrays.sort()', category: '메서드', description: '배열 정렬' },
  ],
};

export default function STLPage() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>(languages[0]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // 선택된 언어에 대한 카테고리 목록 생성 (타입 안전하게)
  const currentLanguageData = stlData[selectedLanguage] || [];
  
  // 카테고리 중복 제거
  const categories = ['all', ...Array.from(
    new Set(currentLanguageData.map(item => item.category))
  )];
  
  // 필터링된 STL 항목
  const filteredSTL = currentLanguageData.filter(item => {
    return (
      (selectedCategory === 'all' || item.category === selectedCategory) &&
      (
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  });

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">표준 라이브러리 (STL) 문서</h1>
        <p className="text-gray-600">각 언어별 표준 라이브러리 정보를 확인하세요.</p>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-wrap gap-2 mb-6">
          {languages.map(lang => (
            <button
              key={lang}
              className={`px-4 py-2 rounded ${
                selectedLanguage === lang ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
              }`}
              onClick={() => {
                setSelectedLanguage(lang);
                // 언어 변경 시 카테고리 초기화
                setSelectedCategory('all');
              }}
            >
              {lang}
            </button>
          ))}
        </div>
        
        <div className="mb-6 flex flex-wrap gap-4">
          <div className="relative flex-grow max-w-md">
            <input
              type="text"
              placeholder="검색..."
              className="pl-10 pr-4 py-2 border rounded-lg w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          
          <select
            className="border rounded-lg px-3 py-2"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? '모든 카테고리' : category}
              </option>
            ))}
          </select>
        </div>
        
        {filteredSTL.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredSTL.map((item, index) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-md">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-600">{item.name}</h3>
                    <span className="inline-block mt-1 px-2 py-1 bg-gray-100 rounded text-xs">
                      {item.category}
                    </span>
                  </div>
                  <Link 
                    href={`/stl/${selectedLanguage}/${encodeURIComponent(item.name)}`}
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    상세보기
                  </Link>
                </div>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">검색 결과가 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}