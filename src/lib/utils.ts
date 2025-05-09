/**
 * 날짜를 포맷팅하는 함수
 * @param dateString - ISO 형식의 날짜 문자열
 * @returns 포맷팅된 날짜 문자열 (예: 2023-05-10)
 */
export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  }
  
  /**
   * 난이도에 따른 색상 클래스를 반환하는 함수
   * @param difficulty - 난이도 문자열 ('쉬움', '중간', '어려움')
   * @returns Tailwind CSS 색상 클래스
   */
  export function getDifficultyColor(difficulty: string): string {
    switch (difficulty) {
      case '쉬움':
        return 'bg-green-100 text-green-800';
      case '중간':
        return 'bg-yellow-100 text-yellow-800';
      case '어려움':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }
  
  /**
   * 문자열을 줄임표로 단축하는 함수
   * @param text - 원본 문자열
   * @param maxLength - 최대 길이
   * @returns 단축된 문자열
   */
  export function truncateText(text: string, maxLength: number = 100): string {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  }