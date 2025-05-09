import Link from 'next/link';

// 임시 데이터
const problems = [
  { id: '1', title: '두 수의 합', difficulty: '쉬움', tags: ['배열', '해시'] },
  { id: '2', title: '유효한 괄호', difficulty: '중간', tags: ['스택'] },
  { id: '3', title: '이진 트리 순회', difficulty: '중간', tags: ['트리', '재귀'] },
  { id: '4', title: '최단 경로 찾기', difficulty: '어려움', tags: ['그래프', '다익스트라'] },
];

export default function ProblemsPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">알고리즘 문제</h1>
        <p className="text-gray-600">다양한 알고리즘 문제를 풀고 풀이를 공유하세요.</p>
      </div>
      
      <div className="mb-6 flex justify-between items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="문제 검색..."
            className="pl-10 pr-4 py-2 border rounded-lg w-64"
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
        <div className="flex gap-2">
          <select className="border rounded-lg px-3 py-2">
            <option>모든 난이도</option>
            <option>쉬움</option>
            <option>중간</option>
            <option>어려움</option>
          </select>
          <select className="border rounded-lg px-3 py-2">
            <option>모든 태그</option>
            <option>배열</option>
            <option>해시</option>
            <option>스택</option>
            <option>큐</option>
            <option>트리</option>
            <option>그래프</option>
          </select>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">번호</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">제목</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">난이도</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">태그</th>
            </tr>
          </thead>
          <tbody>
            {problems.map((problem) => (
              <tr key={problem.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{problem.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <Link href={`/problems/${problem.id}`} className="text-blue-600 hover:text-blue-800">
                    {problem.title}
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`px-2 py-1 rounded text-xs ${
                    problem.difficulty === '쉬움' ? 'bg-green-100 text-green-800' :
                    problem.difficulty === '중간' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {problem.difficulty}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <div className="flex gap-1">
                    {problem.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}