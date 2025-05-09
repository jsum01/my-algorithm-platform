'use client';

import { useState } from 'react';
import MarkdownEditor from '@/components/markdown/MarkdownEditor';
import CodeEditor from '@/components/editor/CodeEditor';

export default function SolvePage() {
  const [solution, setSolution] = useState('');
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState<'javascript' | 'cpp' | 'python'>('javascript');
  
  // 문제 정보 (실제로는 API에서 가져와야 함)
  const problem = {
    id: '1',
    title: '두 수의 합',
    description: `
# 두 수의 합

## 문제 설명
정수 배열 nums와 정수 target이 주어지면, 배열에서 두 숫자의 합이 target이 되는 인덱스를 반환하세요.

각 입력에 정확히 하나의 솔루션이 있다고 가정하며, 같은 요소를 두 번 사용할 수 없습니다.

## 입력 예시
- nums = [2, 7, 11, 15], target = 9

## 출력 예시
- [0, 1]

## 설명
nums[0] + nums[1] = 2 + 7 = 9이므로, [0, 1]을 반환합니다.

## 제약 조건
- 2 <= nums.length <= 10^4
- -10^9 <= nums[i] <= 10^9
- -10^9 <= target <= 10^9
- 정확히 하나의 유효한 답만 존재합니다.
    `,
    difficulty: '쉬움',
    tags: ['배열', '해시'],
  };
  
  const handleSubmit = () => {
    // 풀이 제출 로직
    console.log('Submitting solution:', { solution, code, language });
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{problem.title}</h1>
        <div className="flex gap-2 mb-4">
          <span className={`px-2 py-1 rounded text-xs ${ 
            problem.difficulty === '쉬움' ? 'bg-green-100 text-green-800' :
            problem.difficulty === '중간' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {problem.difficulty}
          </span>
          {problem.tags.map(tag => (
            <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="bg-white rounded-lg shadow p-6 prose max-w-none">
            <div dangerouslySetInnerHTML={{ __html: problem.description.replace(/\n/g, '<br />') }} />
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">코드 작성</h2>
            <div className="mb-2">
              <select 
                className="px-2 py-1 border rounded"
                value={language}
                onChange={(e) => setLanguage(e.target.value as 'javascript' | 'cpp' | 'python')}
              >
                <option value="javascript">JavaScript</option>
                <option value="cpp">C++</option>
                <option value="python">Python</option>
              </select>
            </div>
            <CodeEditor
              language={language}
              onChange={setCode}
            />
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">풀이 설명</h2>
            <MarkdownEditor
              onChange={setSolution}
            />
          </div>
          
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md"
          >
            제출하기
          </button>
        </div>
      </div>
    </div>
  );
}