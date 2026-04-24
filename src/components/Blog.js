import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Blog.css';

const posts = [
  {
    date: '18 Mar 2016',
    title: 'Apache Kafka — Next Generation Distributed Pub-Sub Message System',
    excerpt:
      'Apache Kafka is an open-source, distributed, high-throughput publish-subscribe messaging system originally developed at LinkedIn. Fast, scalable, partitioned and replicated — built for modern event-driven architectures.',
    link: 'https://kodtodya.github.io/2016/03/18/Apache_Kafka/',
    live: true,
    tags: ['Kafka', 'Messaging', 'Distributed Systems'],
  },
  {
    date: 'Coming Soon',
    title: 'Microservices with Apache Camel & Spring Boot',
    excerpt:
      'Deep-diving into enterprise integration patterns using Apache Camel routes, Spring Boot auto-configuration, and cloud-native deployment patterns.',
    link: null,
    live: false,
    tags: ['Camel', 'Spring Boot', 'Microservices'],
  },
  {
    date: 'Coming Soon',
    title: 'OpenShift for Java Developers',
    excerpt:
      'A practical guide to deploying, scaling, and monitoring containerized Java middleware applications on Red Hat OpenShift and Kubernetes.',
    link: null,
    live: false,
    tags: ['OpenShift', 'Kubernetes', 'Java'],
  },
];

export default function Blog() {
  useScrollReveal();

  return (
    <section id="blog" className="section">
      <div className="section-tag">05 / Blog</div>
      <h2 className="section-title">
        Knowledge <span className="accent">Shared</span>
      </h2>
      <div className="section-divider" />

      <div className="blog-grid">
        {posts.map((post, i) => (
          <div
            className={`blog-card fade-in delay-${i + 1} ${!post.live ? 'blog-card--dim' : ''}`}
            key={post.title}
            onClick={() => post.link && window.open(post.link, '_blank')}
            style={{ cursor: post.live ? 'pointer' : 'default' }}
          >
            <div className="blog-tags">
              {post.tags.map((t) => (
                <span className="blog-tag" key={t}>{t}</span>
              ))}
            </div>
            <div className="blog-date">{post.date}</div>
            <div className="blog-title">{post.title}</div>
            <p className="blog-excerpt">{post.excerpt}</p>
            <div className={`blog-read ${!post.live ? 'blog-read--dim' : ''}`}>
              {post.live ? 'Read Article →' : 'In Progress...'}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
