import React from "react";

const data = [
  { category: "Технологии", count: 12 },
  { category: "Бизнес", count: 9 },
  { category: "Спорт", count: 7 },
  { category: "Наука", count: 5 },
];

function Analytics() {
  return (
    <div className="page">
      <h1>Аналитика новостей</h1>
      <p>Статистика количества новостей по категориям:</p>

      <ul className="analytics-list">
        {data.map((item) => (
          <li key={item.category}>
            <span>{item.category}</span>
            <div className="bar">
              <div style={{ width: `${item.count * 10}px` }} className="fill" />
              <span className="count">{item.count}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Analytics;
