import { NextResponse } from 'next/server';

// 임시 데이터
const problems = [
  { id: '1', title: '두 수의 합', difficulty: '쉬움', tags: ['배열', '해시'] },
  { id: '2', title: '유효한 괄호', difficulty: '중간', tags: ['스택'] },
  { id: '3', title: '이진 트리 순회', difficulty: '중간', tags: ['트리', '재귀'] },
  { id: '4', title: '최단 경로 찾기', difficulty: '어려움', tags: ['그래프', '다익스트라'] },
];

export async function GET(request: Request) {
  // URL에서 쿼리 파라미터 추출
  const { searchParams } = new URL(request.url);
  const search = searchParams.get('search');
  const difficulty = searchParams.get('difficulty');
  const tag = searchParams.get('tag');
  
  // 필터링 로직
  let filteredProblems = [...problems];
  
  if (search) {
    filteredProblems = filteredProblems.filter(problem => 
      problem.title.toLowerCase().includes(search.toLowerCase())
    );
  }
  
  if (difficulty && difficulty !== 'all') {
    filteredProblems = filteredProblems.filter(problem => 
      problem.difficulty === difficulty
    );
  }
  
  if (tag && tag !== 'all') {
    filteredProblems = filteredProblems.filter(problem => 
      problem.tags.includes(tag)
    );
  }
  
  return NextResponse.json({ problems: filteredProblems });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // 실제로는 데이터베이스에 저장하고 ID를 받아와야 함
    const newProblem = {
      id: (problems.length + 1).toString(),
      ...body
    };
    
    // 임시 데이터에 추가
    problems.push(newProblem);
    
    return NextResponse.json({ problem: newProblem }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: '잘못된 요청입니다.' },
      { status: 400 }
    );
  }
}