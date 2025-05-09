'use client';

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github.css';

interface MarkdownEditorProps {
  initialValue?: string;
  onChange?: (value: string) => void;
}

export default function MarkdownEditor({ initialValue = '', onChange }: MarkdownEditorProps) {
  const [markdown, setMarkdown] = useState(initialValue);
  const [view, setView] = useState<'edit' | 'preview' | 'split'>('split');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
    onChange?.(e.target.value);
  };

  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="flex items-center p-2 border-b bg-gray-50">
        <div className="flex space-x-2">
          <button
            className={`px-3 py-1 rounded ${view === 'edit' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setView('edit')}
          >
            편집
          </button>
          <button
            className={`px-3 py-1 rounded ${view === 'preview' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setView('preview')}
          >
            미리보기
          </button>
          <button
            className={`px-3 py-1 rounded ${view === 'split' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setView('split')}
          >
            분할
          </button>
        </div>
      </div>
      
      <div className={`flex ${view === 'split' ? 'flex-row' : 'flex-col'}`}>
        {(view === 'edit' || view === 'split') && (
          <div className={`${view === 'split' ? 'w-1/2' : 'w-full'}`}>
            <textarea
              className="w-full h-72 p-4 font-mono resize-none focus:outline-none"
              value={markdown}
              onChange={handleChange}
              placeholder="마크다운으로 작성하세요..."
            />
          </div>
        )}
        
        {(view === 'preview' || view === 'split') && (
          <div 
            className={`${view === 'split' ? 'w-1/2 border-l' : 'w-full'} p-4 prose max-w-none`}
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
            >
              {markdown}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}