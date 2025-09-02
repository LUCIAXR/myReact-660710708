import React from 'react';

// Component ย่อยๆ
const Avatar = () => (
    <img 
        src="https://toppng.com/uploads/preview/personminus512x512-icon-icon-11553447553dbkjnrckub.png" 
        alt="User Avatar"
        style={{
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            border: '2px solid #667eea'
        }}
    />
);

const UserName = () => (
    <h3 style={{ color: '#667eea', margin: '10px 0' }}>
        เตชวัตร มณีนิยม
    </h3>
);

const UserBio = () => (
    <p style={{ color: '#666', fontSize: '14px' }}>
        นักศึกษาฝึกหัดกำลังเรียนรู้ React อยู่ค้าบผม
    </p>
);

// Component หลักที่ประกอบจาก components ย่อย
const UserCard = () => {
    return (
        <div style={{
            border: '1px solid #ddd',
            padding: '20px',
            borderRadius: '12px',
            textAlign: 'center',
            backgroundColor: '#f9f9f9',
            maxWidth: '300px',
            margin: '20px auto'
        }}>
            <Avatar />
            <UserName />
            <UserBio />
        </div>
    );
};

export default UserCard;