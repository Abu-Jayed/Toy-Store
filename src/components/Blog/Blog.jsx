const Blog = () => {
  return (
    <div>
      <div className="mt-20 shadow-md shadow-black rounded-xl">
        <div className="mockup-window border bg-base-300">
          <div className=" justify-center px-7 py-10 bg-base-200">
            <h1 className="text-3xl font-semibold">
              {" "}
              <span className="font-bold">Q:1</span> What is an access token and
              refresh token? How do they work and where should we store them on
              the client-side?
            </h1>{" "}
            <br />
            <h3>
              <span className="font-bold">Ans:</span> An access token is a
              credential that is used to authorize and authenticate a user's
              access to a particular resource or service. It is typically a
              short-lived token that grants permission to perform specific
              actions or retrieve specific data. A refresh token, on the other
              hand, is a long-lived token that is used to obtain a new access
              token when the current one expires. It is usually issued along
              with the access token and is stored securely on the client-side.
              When a user authenticates and obtains an access token, they can
              include it in their requests to the server to access protected
              resources. The server verifies the validity of the token and
              grants or denies access accordingly. Refresh tokens are used to
              obtain new access tokens without requiring the user to re-enter
              their credentials. When an access token expires, the client sends
              the refresh token to the server, and if valid, the server issues a
              new access token. This process helps improve security by reducing
              the exposure of the user's credentials. Both the access token and
              refresh token should be securely stored on the client-side. One
              common approach is to store the access token in memory or a
              short-lived storage mechanism (such as a browser's sessionStorage)
              since it has a shorter lifespan. The refresh token, which is
              long-lived, should be securely stored, such as in an HTTP-only
              cookie or a secure local storage mechanism. This helps protect
              against cross-site scripting (XSS) attacks and unauthorized access
              to the token.
            </h3>
          </div>
        </div>
      </div>
      {/* question 2 start  */}
      <div className="mt-20 shadow-md shadow-black rounded-xl">
        <div className="mockup-window border bg-base-300">
          <div className=" justify-center px-7 py-10 bg-base-200">
            <h1 className="text-3xl font-semibold">
              {" "}
              <span className="font-bold">Q:2</span> Compare SQL and NoSQL
              databases!!!
            </h1>{" "}
            <br />
            <h3 className="">
              <span className="font-bold">Ans:</span> SQL and NoSQL databases
              are two different types of database management systems with
              distinct characteristics. SQL databases, also known as relational
              databases, organize data into tables with predefined schemas. They
              use Structured Query Language (SQL) for defining and manipulating
              the data. SQL databases excel at handling complex relationships
              and ensuring data integrity through constraints and normalization.
              They are suitable for applications that require ACID (Atomicity,
              Consistency, Isolation, Durability) compliance, such as financial
              systems. On the other hand, NoSQL databases, also known as
              non-relational databases, offer flexible data models that can
              adapt to changing requirements. They do not rely on fixed schemas
              and are designed to handle large volumes of unstructured or
              semi-structured data. NoSQL databases use various data models like
              key-value, document, columnar, or graph. They prioritize
              scalability, high performance, and distributed computing. NoSQL
              databases are well-suited for handling big data, real-time
              analytics, and highly scalable web applications. SQL databases
              provide powerful querying capabilities through SQL, enabling
              complex joins, aggregations, and advanced querying operations.
              NoSQL databases often offer simpler query languages or APIs
              specific to their data models. SQL databases provide strong
              transactional support, ensuring data consistency and reliability.
              NoSQL databases often sacrifice strict consistency for
              scalability, offering eventual consistency models or tunable
              consistency options. SQL databases have been in use for a longer
              time and have mature ecosystems with robust tools, ORMs
              (Object-Relational Mappers), and wide community support. NoSQL
              databases have a more diverse landscape, with different databases
              optimized for specific use cases. In summary, SQL databases are
              suitable for applications with complex relationships and strict
              data integrity requirements, while NoSQL databases excel in
              handling large volumes of flexible, unstructured data and
              prioritizing scalability and performance.
            </h3>
          </div>
        </div>
      </div>
      {/* question 2 end  */}

      {/* question 3 start  */}
      <div className="mt-20 shadow-md shadow-black rounded-xl">
        <div className="mockup-window border bg-base-300">
          <div className=" justify-center px-7 py-10 bg-base-200">
            <h1 className="text-3xl font-semibold">
              {" "}
              <span className="font-bold">Q:3</span> What is express js? What is
              Nest JS?
            </h1>{" "}
            <br />
            <h3 className="">
              <span className="font-bold">Ans:</span> Express.js is a popular
              and minimalist web application framework for Node.js. It provides
              a simple and flexible set of features to build web applications
              and APIs. Express.js focuses on being unopinionated, allowing
              developers to have more control over their application's structure
              and design choices. It provides routing capabilities, middleware
              support, and an ecosystem of plugins and extensions for additional
              functionality. NestJS, on the other hand, is a progressive and
              opinionated framework for building efficient and scalable
              server-side applications. It is built with TypeScript and
              incorporates concepts from Angular, such as dependency injection,
              decorators, and modules. NestJS follows a modular architecture,
              making it easy to organize and maintain code. It provides built-in
              support for features like routing, middleware, authentication,
              validation, and more. NestJS offers a robust set of features
              out-of-the-box, making it suitable for large-scale applications.
              It promotes the use of TypeScript and strongly-typed programming,
              which helps catch errors during development. NestJS also provides
              an intuitive and powerful dependency injection system, making it
              easier to manage dependencies and write testable code. While
              Express.js gives developers more flexibility and control, NestJS
              provides a structured and opinionated approach for building
              scalable applications. Both frameworks have their own strengths
              and can be chosen based on the specific requirements and
              preferences of the project.
            </h3>
          </div>
        </div>
      </div>
      {/* question 3 end  */}

      {/* question 4 start  */}
      <div className="mt-20 mb-32 shadow-md shadow-black rounded-xl">
        <div className="mockup-window border bg-base-300">
          <div className=" justify-center px-7 py-10 bg-base-200">
            <h1 className="text-3xl font-semibold">
              {" "}
              <span className="font-bold">Q:4</span> What is MongoDB aggregate
              and how does it work?
            </h1>{" "}
            <br />
            <h3 className="">
              <span className="font-bold">Ans:</span> In MongoDB, the aggregate
              method is used to perform advanced data aggregation operations on
              collections. It allows you to process and transform data within
              MongoDB, performing complex computations and aggregations. The
              aggregate method takes an array of stages as its input. Each stage
              represents a specific operation that is executed sequentially on
              the data. Examples of stages include $match for filtering
              documents, $group for grouping and aggregating data, $sort for
              sorting documents, and $project for shaping the output. The stages
              are processed in the order they appear in the array, allowing you
              to create a pipeline of operations. Each stage takes the input
              from the previous stage and passes its output to the next stage.
              Within each stage, you can use a variety of operators and
              expressions to perform computations, comparisons, transformations,
              and more. These operators allow you to manipulate and reshape the
              data according to your requirements. The aggregate method is
              powerful and flexible, enabling you to perform complex data
              aggregations and transformations within the database itself,
              rather than retrieving large amounts of data and processing it
              externally. By leveraging the aggregate method, you can
              efficiently analyze and summarize data, perform statistical
              calculations, generate reports, and obtain insights from your
              MongoDB collections.
            </h3>
          </div>
        </div>
      </div>
      {/* question 4 end  */}
    </div>
  );
};

export default Blog;
