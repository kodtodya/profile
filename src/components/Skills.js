import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Skills.css';

const categories = [
  {
    icon: '☕',
    name: 'Core Development',
    tags: ['Core Java v8/v11', 'Spring', 'Spring Boot', 'Apache Camel', 'Spring Batch', 'Apache Maven', 'Apache Blueprint'],
  },
  {
    icon: '☁️',
    name: 'Cloud & Containers',
    tags: ['Red Hat OpenShift', 'Docker', 'Kubernetes', 'Quarkus', 'Apache Karaf', 'Fuse Container', 'Fabric Container'],
  },
  {
    icon: '📨',
    name: 'Messaging & Brokers',
    tags: ['Apache Kafka', 'ActiveMQ', 'ActiveMQ Artemis', 'IBM WebSphere MQ', 'Tibco EMS', 'HornetQ'],
  },
  {
    icon: '🗄️',
    name: 'Databases',
    tags: ['SQL', 'Oracle', 'MongoDB', 'Apache Cassandra', 'H2', 'Apache Derby'],
  },
  {
    icon: '🔗',
    name: 'Middleware Integration',
    tags: ['RedHat JBoss Fuse', 'JBoss EAP', 'JBoss A-MQ', 'Spring Integration', 'Microservices', 'Design Patterns'],
  },
  {
    icon: '🔍',
    name: 'Logging & Observability',
    tags: ['Elasticsearch', 'Kibana', 'Log4j', 'Logback', 'slf4j', 'ZooKeeper', 'Apache Fabric'],
  },
  {
    icon: '🧪',
    name: 'Testing',
    tags: ['JUnit', 'Cucumber', 'BDD', 'CodePro', 'Behavioral Driven Development'],
  },
  {
    icon: '🛠️',
    name: 'Tools & VCS',
    tags: ['Git', 'BitBucket', 'SVN', 'IBM ClearCase', 'IntelliJ', 'Eclipse', 'IBM IIB', 'Memory Analyzer', 'PGP'],
  },
];

export default function Skills() {
  useScrollReveal();

  return (
    <section id="skills" className="section skills-section">
      <div className="section-tag">02 / Skills</div>
      <h2 className="section-title">
        Technical <span className="accent">Arsenal</span>
      </h2>
      <div className="section-divider" />

      <div className="skills-grid">
        {categories.map((cat, i) => (
          <div
            className={`skill-category fade-in delay-${(i % 3) + 1}`}
            key={cat.name}
          >
            <div className="skill-cat-header">
              <div className="skill-cat-icon">{cat.icon}</div>
              <div className="skill-cat-name">{cat.name}</div>
            </div>
            <div className="skill-tags">
              {cat.tags.map((tag) => (
                <span className="skill-tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
