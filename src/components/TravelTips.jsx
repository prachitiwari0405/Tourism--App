import React, { useState } from 'react';
import { Container, Accordion, Card, Button } from 'react-bootstrap';
import { FaInfoCircle, FaUtensils, FaLanguage, FaMoneyBillWave } from 'react-icons/fa';

const TravelTips = () => {
  const [activeKey, setActiveKey] = useState('0');

  const tips = [
    {
      title: 'Cultural Etiquette',
      icon: <FaInfoCircle />,
      content: [
        { country: 'Japan', tips: ['Remove shoes before entering homes', 'Bow when greeting', 'Don\'t tip in restaurants'] },
        { country: 'India', tips: ['Use right hand for eating', 'Remove shoes at temples', 'Dress modestly'] },
        { country: 'UAE', tips: ['Dress conservatively', 'No PDA', 'Ask before taking photos of people'] }
      ]
    },
    {
      title: 'Local Cuisine Guide',
      icon: <FaUtensils />,
      content: [
        { country: 'Italy', tips: ['Cappuccino only for breakfast', 'Pasta is a first course', 'Wine with meals is common'] },
        { country: 'Thailand', tips: ['Use fork to push food onto spoon', 'Street food is authentic', 'Meals are shared'] },
        { country: 'France', tips: ['Bread as utensil', 'Long lunches are normal', 'Wine pairing is important'] }
      ]
    },
    {
      title: 'Essential Phrases',
      icon: <FaLanguage />,
      content: [
        { language: 'French', phrases: ['Bonjour - Hello', 'Merci - Thank you', 'S\'il vous plaît - Please'] },
        { language: 'Spanish', phrases: ['Hola - Hello', 'Gracias - Thank you', 'Por favor - Please'] },
        { language: 'Japanese', phrases: ['こんにちは - Hello', 'ありがとう - Thank you', 'お願いします - Please'] }
      ]
    },
    {
      title: 'Money Tips',
      icon: <FaMoneyBillWave />,
      content: [
        { region: 'Europe', tips: ['Always carry some cash', 'Credit cards widely accepted', 'Inform your bank before travel'] },
        { region: 'Asia', tips: ['Cash is king', 'Bargaining is common', 'Watch out for counterfeit bills'] },
        { region: 'Americas', tips: ['Tipping expected in USA', 'ATMs widely available', 'Check exchange rates'] }
      ]
    }
  ];

  return (
    <Container className="py-5">
      <h2 className="mb-4">Travel Tips & Cultural Guide</h2>
      <Accordion activeKey={activeKey} onSelect={k => setActiveKey(k)}>
        {tips.map((section, index) => (
          <Accordion.Item key={index} eventKey={index.toString()}>
            <Accordion.Header>
              <span className="me-2">{section.icon}</span>
              {section.title}
            </Accordion.Header>
            <Accordion.Body>
              {section.content.map((item, i) => (
                <Card key={i} className="mb-3">
                  <Card.Header>
                    <strong>{Object.keys(item)[0]}: {item[Object.keys(item)[0]]}</strong>
                  </Card.Header>
                  <Card.Body>
                    <ul className="mb-0">
                      {item.tips.map((tip, j) => (
                        <li key={j}>{tip}</li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              ))}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
};

export default TravelTips;