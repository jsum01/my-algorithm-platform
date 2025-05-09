import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">알고리즘 문제 풀이 플랫폼</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          매일 알고리즘 문제를 풀고, 마크다운으로 풀이를 공유하고, 피드백을 받아보세요.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">문제 풀기</h2>
          <p className="text-gray-600 mb-4">다양한 알고리즘 문제를 풀고 풀이를 공유하세요.</p>
          <Link href="/problems" className="text-blue-600 hover:text-blue-800 font-medium">
            문제 목록 보기 →
          </Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">백준 연동</h2>
          <p className="text-gray-600 mb-4">백준 문제를 연동하고 자신의 솔루션을 공유하세요.</p>
          <Link href="/auth/connect" className="text-blue-600 hover:text-blue-800 font-medium">
            계정 연동하기 →
          </Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">STL 문서화</h2>
          <p className="text-gray-600 mb-4">언어별 표준 라이브러리 사용법을 확인하세요.</p>
          <Link href="/stl" className="text-blue-600 hover:text-blue-800 font-medium">
            STL 문서 보기 →
          </Link>
        </div>
      </div>
      
      <div className="bg-blue-50 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">지금 시작하세요</h2>
        <p className="text-gray-600 text-center mb-6">
          알고리즘 문제 풀이 공유와 코드 리뷰를 통해 함께 성장하는 커뮤니티에 참여하세요.
        </p>
        <div className="flex justify-center gap-4">
          <Link 
            href="/auth/login" 
            className="px-6 py-3 bg-white text-blue-600 rounded-lg shadow hover:shadow-md transition duration-200"
          >
            로그인
          </Link>
          <Link 
            href="/auth/register" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-200"
          >
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
}