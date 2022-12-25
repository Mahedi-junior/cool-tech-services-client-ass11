import React from "react";
import { Accordion } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="container">
      <Accordion defaultActiveKey="0" className="mt-5">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <span className="fw-semibold fs-4">
              #1..Difference between SQL and NoSQL
            </span>
          </Accordion.Header>
          <Accordion.Body className="fs-5">
            <p>
              SQL databases are based on a relational model, which means that
              they store data in tables and relationships are established using
              foreign keys. SQL databases are well-suited for handling
              structured data, such as customer information and product
              catalogs, and they are often used in applications that require
              complex queries, transactions, and data integrity. Examples of SQL
              databases include MySQL, Oracle, and Microsoft SQL Server.
            </p>

            <p>
              NoSQL databases, on the other hand, are designed to handle
              unstructured and semi-structured data, such as user activity logs,
              social media feeds, and event data. NoSQL databases are generally
              more flexible and scalable than SQL databases, and they are
              well-suited for handling large amounts of data that may not fit
              neatly into a table structure. Examples of NoSQL databases include
              MongoDB, Cassandra, and Couchbase.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <span className="fw-semibold fs-4">
              #2..What is the difference between javascript and NodeJS?
            </span>
          </Accordion.Header>
          <Accordion.Body className="fs-5">
            <p>
              JavaScript is a programming language that is commonly used for web
              development. It is a high-level, dynamically-typed language that
              is supported by modern web browsers and is often used to create
              interactive web applications.
            </p>
            <p>
              Node.js is a JavaScript runtime built on Chrome's V8 JavaScript
              engine. It allows developers to run JavaScript on the server side,
              outside of a web browser. Node.js includes a large set of built-in
              APIs and libraries that allow developers to create server-side
              applications using JavaScript.
            </p>
            <p className="fw-semibold">
              In other words, JavaScript is a programming language, and Node.js
              is a runtime environment that allows developers to execute
              JavaScript code on the server side. Node.js is built on top of
              JavaScript, but it is not JavaScript itself.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <span className="fw-semibold fs-4">
              #3..How does NodeJS handle multiple requests at the same time?
            </span>
          </Accordion.Header>
          <Accordion.Body className="fs-5">
            Node.js uses a single-threaded event loop to handle incoming
            requests and perform non-blocking I/O operations. This means that
            when a request comes in, Node.js adds it to an event queue and then
            processes it asynchronously, allowing other requests to be handled
            concurrently.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blog;
