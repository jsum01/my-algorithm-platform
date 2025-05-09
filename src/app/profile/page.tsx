'use client';

import { useState } from 'react';
import Link from 'next/link';

// 임시 사용자 데이터
const user = {
  name: '홍길동',
  email: 'user@example.com',
  image: 'https://i.pravatar.cc/300',
  bojUsername: 'hongildong',
  createdAt: '2023-01-15',
  solvedCount: 42,
  solutions: [
    { id: '1', title: '두 수의 합', createdAt: '2023-05-10', language: 'JavaScript' },
    { id: '2', title: '유효한 괄호', createdAt: '2023-05-15', language: 'C++' },
    { id: '3', title: '이진 트리 순회', createdAt: '2023-05-20', language: 'Python' },
  ],
};

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('solutions');

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row gap-8 mb-8">
        <div className="md:w-1/4 flex flex-col items-center">
          <img
            src={user.image}
            alt={user.name}
            className="w-32 h-32 rounded-full object-cover mb-4"
          />
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-gray-600 mb-2">{user.email}</p>
          {user.bojUsername && (
            <div className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              백준: {user.bojUsername}
            </div>
          )}
        </div>
        
        <div className="md:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <p className="text-gray-600 text-sm">가입일</p>
              <p className="text-xl font-semibold">{user.createdAt}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <p className="text-gray-600 text-sm">해결한 문제</p>
              <p className="text-xl font-semibold">{user.solvedCount}개</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <p className="text-gray-600 text-sm">기여도</p>
              <p className="text-xl font-semibold">상위 10%</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-semibold">활동 내역</h2>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              프로필 편집
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow">
        <div className="border-b">
          <div className="flex">
            <button
              className={`px-6 py-3 ${activeTab === 'solutions' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('solutions')}
            >
              풀이 목록
            </button>
            <button
              className={`px-6 py-3 ${activeTab === 'comments' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('comments')}
            >
              댓글
            </button>
            <button
              className={`px-6 py-3 ${activeTab === 'stats' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('stats')}
            >
              통계
            </button>
          </div>
        </div>
        
        <div className="p-6">
          {activeTab === 'solutions' && (
            <div>
              <h3 className="text-lg font-semibold mb-4">최근 풀이</h3>
              <div className="divide-y">
                {user.solutions.map((solution) => (
                  <div key={solution.id} className="py-4 flex justify-between items-center">
                    <div>
                      <Link href={`/problems/${solution.id}`} className="text-blue-600 hover:text-blue-800 font-medium">
                        {solution.title}
                      </Link>
                      <p className="text-sm text-gray-500">
                        {solution.createdAt} • {solution.language}
                      </p>
                    </div>
                    <Link href={`/solutions/${solution.id}`} className="text-blue-600 hover:text-blue-800 text-sm">
                      보기
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'comments' && (
            <div>
              <h3 className="text-lg font-semibold mb-4">작성한 댓글</h3>
              <p className="text-gray-500">아직 작성한 댓글이 없습니다.</p>
            </div>
          )}
          
          {activeTab === 'stats' && (
            <div>
              <h3 className="text-lg font-semibold mb-4">푼 문제 통계</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-4">
                  <h4 className="text-md font-medium mb-2">난이도별 통계</h4>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">쉬움</span>
                        <span className="text-sm text-gray-500">15개</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">중간</span>
                        <span className="text-sm text-gray-500">20개</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">어려움</span>
                        <span className="text-sm text-gray-500">7개</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: '20%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h4 className="text-md font-medium mb-2">언어별 통계</h4>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">JavaScript</span>
                        <span className="text-sm text-gray-500">18개</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">C++</span>
                        <span className="text-sm text-gray-500">12개</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Python</span>
                        <span className="text-sm text-gray-500">10개</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}