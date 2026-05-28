import React, { useState } from 'react';
import '../styles/JordanShowcase.css';
import ProductCard from './ProductCard';
import Hero from './Hero';

const JordanShowcase = () => {
  const [selectedSneaker, setSelectedSneaker] = useState(null);

  const jordanSneakers = [
    {
      id: 1,
      name: 'Air Jordan 1 Retro High',
      year: '1985',
      price: '$170',
      image: '👟',
      description: '전설의 시작, 에어 조던 1은 농구 문화를 바꾼 아이콘입니다.',
      color: 'Black & Red',
      specs: {
        material: 'Leather & Suede',
        technology: 'Air Cushioning',
        weight: '382g'
      }
    },
    {
      id: 2,
      name: 'Air Jordan 3 Retro',
      year: '1988',
      price: '$190',
      image: '👟',
      description: '스파이크 혼드를 특징으로 하는 게임 체인저. 조던의 영광기를 대표합니다.',
      color: 'White & Black & Cement',
      specs: {
        material: 'Leather',
        technology: 'Air Sole + Visible Air Unit',
        weight: '390g'
      }
    },
    {
      id: 3,
      name: 'Air Jordan 6 Retro',
      year: '1991',
      price: '$190',
      image: '👟',
      description: '첫 번째 NBA 챔피언십을 차지한 신발. 완벽한 디자인과 성능의 조화.',
      color: 'Black & Red',
      specs: {
        material: 'Leather & Nubuck',
        technology: 'Air Sole',
        weight: '385g'
      }
    },
    {
      id: 4,
      name: 'Air Jordan 11 Retro',
      year: '1995',
      price: '$180',
      image: '👟',
      description: '페이턴 가죽 디자인으로 유명한 현대적 클래식. 럭셔리함의 정의.',
      color: 'Black & White',
      specs: {
        material: 'Patent Leather & Mesh',
        technology: 'Air Zoom + Visible Air',
        weight: '370g'
      }
    },
    {
      id: 5,
      name: 'Air Jordan 23',
      year: '2008',
      price: '$165',
      image: '👟',
      description: '조던의 마지막 게임 신발. 우아함과 전투성의 완벽한 조합.',
      color: 'Black & Red',
      specs: {
        material: 'Mesh & Synthetic',
        technology: 'Zoom Air + Flight Plate',
        weight: '325g'
      }
    },
    {
      id: 6,
      name: 'Air Jordan 1 Retro High OG',
      year: '2023',
      price: '$170',
      image: '👟',
      description: '현대식 기술로 재해석된 원조. 클래식의 부활.',
      color: 'Multiple Colorways',
      specs: {
        material: 'Premium Leather',
        technology: 'Air Zoom + Cushlon',
        weight: '380g'
      }
    }
  ];

  return (
    <div className="jordan-showcase">
      <Hero />
      
      <section className="showcase-section">
        <div className="section-header">
          <h2>The Legend Collection</h2>
          <p>마이클 조던의 전설을 담은 에어 조던 신발들</p>
        </div>

        <div className="products-grid">
          {jordanSneakers.map((sneaker) => (
            <ProductCard
              key={sneaker.id}
              sneaker={sneaker}
              onSelect={() => setSelectedSneaker(sneaker)}
              isSelected={selectedSneaker?.id === sneaker.id}
            />
          ))}
        </div>
      </section>

      {selectedSneaker && (
        <section className="detail-section">
          <div className="detail-container">
            <div className="detail-image">
              <div className="large-emoji">{selectedSneaker.image}</div>
            </div>
            <div className="detail-content">
              <button 
                className="close-btn"
                onClick={() => setSelectedSneaker(null)}
              >
                ✕
              </button>
              <h2>{selectedSneaker.name}</h2>
              <p className="year">출시년도: {selectedSneaker.year}</p>
              <p className="description">{selectedSneaker.description}</p>
              
              <div className="specs">
                <h3>스펙 정보</h3>
                <ul>
                  <li><strong>색상:</strong> {selectedSneaker.color}</li>
                  <li><strong>소재:</strong> {selectedSneaker.specs.material}</li>
                  <li><strong>기술:</strong> {selectedSneaker.specs.technology}</li>
                  <li><strong>무게:</strong> {selectedSneaker.specs.weight}</li>
                </ul>
              </div>

              <div className="price-section">
                <span className="price">{selectedSneaker.price}</span>
                <button className="buy-btn">구매하기</button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default JordanShowcase;
