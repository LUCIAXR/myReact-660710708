import React from "react";
import { Link } from "react-router-dom";  // แก้จาก 'link' เป็น 'Link'


const ContactPage = () => {
    return(
        <div>
            <h1>Welcome to the ContactPage</h1>
            <p>This is the ContactPage of the bookstore application</p>
            <p>Explore our collection of books and find your next read!</p>
            <Link to="/books">Go to Books </Link>  {/* ใช้ 'to' เพื่อไปยังหน้า /books */}
        </div>
    )
}

export default ContactPage;
