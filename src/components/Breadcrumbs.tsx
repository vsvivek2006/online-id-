import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const navigate = (href?: string) => {
    if (!href) return;
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav aria-label="Breadcrumb" className="py-2.5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
        <li className="inline-flex items-center">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
            className="inline-flex items-center gap-1 hover:text-emerald-700 transition-colors font-medium min-h-[32px] py-1"
          >
            <Home className="w-3.5 h-3.5 text-slate-400" />
            <span>Home</span>
          </a>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <li aria-hidden="true">
                <ChevronRight className="w-3 h-3 text-slate-300" />
              </li>
              <li>
                {isLast || !item.href ? (
                  <span className="text-emerald-800 font-bold" aria-current="page">{item.label}</span>
                ) : (
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(item.href);
                    }}
                    className="hover:text-emerald-700 transition-colors font-medium min-h-[32px] py-1 inline-flex items-center"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
