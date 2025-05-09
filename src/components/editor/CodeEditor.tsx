'use client';

import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { cpp } from '@codemirror/lang-cpp';
import { python } from '@codemirror/lang-python';

const languageMap = {
  javascript: javascript(),
  cpp: cpp(),
  python: python(),
};

interface CodeEditorProps {
  initialCode?: string;
  language?: 'javascript' | 'cpp' | 'python';
  onChange?: (value: string) => void;
}

export default function CodeEditor({ 
  initialCode = '', 
  language = 'javascript',
  onChange 
}: CodeEditorProps) {
  const [code, setCode] = useState(initialCode);
  const [currentLanguage, setCurrentLanguage] = useState(language);

  const handleChange = (value: string) => {
    setCode(value);
    onChange?.(value);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentLanguage(e.target.value as 'javascript' | 'cpp' | 'python');
  };

  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="bg-gray-50 px-4 py-2 border-b flex justify-between items-center">
        <select 
          className="px-2 py-1 border rounded"
          value={currentLanguage}
          onChange={handleLanguageChange}
        >
          <option value="javascript">JavaScript</option>
          <option value="cpp">C++</option>
          <option value="python">Python</option>
        </select>
        <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">
          실행
        </button>
      </div>
      <CodeMirror
        value={code}
        height="300px"
        extensions={[languageMap[currentLanguage]]}
        onChange={handleChange}
        theme="dark"
      />
    </div>
  );
}