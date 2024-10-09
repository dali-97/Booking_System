export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (prams) => {
      return (
        <div className="cellWithImg">
          <img className="celImage" src={prams.row.img} alt="avatar" />
          {prams.row.username}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 230 },
  { field: "age", headerName: "Age", width: 100 },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (prams) => {
      return <div>
        <span className={`cellWithStatus ${prams.row.status}`}>{prams.row.status}</span>
      </div>;
    },
  },
];

// temorary data
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/28777759/pexels-photo-28777759/free-photo-of-casual-portrait-of-man-sitting-outdoors-in-rio.jpeg?auto=compress&cs=tinysrgb&w=400",
    status: "active",
    email: "isSnow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Salman",
    img: "https://images.pexels.com/photos/28777759/pexels-photo-28777759/free-photo-of-casual-portrait-of-man-sitting-outdoors-in-rio.jpeg?auto=compress&cs=tinysrgb&w=400",
    status: "passive",
    email: "Salman51@gmail.com",
    age: 41,
  },
  {
    id: 3,
    username: "elWali",
    img: "https://images.pexels.com/photos/28777759/pexels-photo-28777759/free-photo-of-casual-portrait-of-man-sitting-outdoors-in-rio.jpeg?auto=compress&cs=tinysrgb&w=400",
    status: "passive",
    email: "elWali@gmail.com",
    age: 28,
  },
  {
    id: 4,
    username: "chr",
    img: "https://images.pexels.com/photos/28777759/pexels-photo-28777759/free-photo-of-casual-portrait-of-man-sitting-outdoors-in-rio.jpeg?auto=compress&cs=tinysrgb&w=400",
    status: "pending",
    email: "chr_chr@gmail.com",
    age: 25,
  },
  {
    id: 5,
    username: "Snow",
    img: "https://images.pexels.com/photos/28777759/pexels-photo-28777759/free-photo-of-casual-portrait-of-man-sitting-outdoors-in-rio.jpeg?auto=compress&cs=tinysrgb&w=400",
    status: "active",
    email: "isSnow@gmail.com",
    age: 35,
  },
  {
    id: 6,
    username: "Salman",
    img: "https://images.pexels.com/photos/28777759/pexels-photo-28777759/free-photo-of-casual-portrait-of-man-sitting-outdoors-in-rio.jpeg?auto=compress&cs=tinysrgb&w=400",
    status: "passive",
    email: "Salman51@gmail.com",
    age: 41,
  },
  {
    id: 7,
    username: "elWali",
    img: "https://images.pexels.com/photos/28777759/pexels-photo-28777759/free-photo-of-casual-portrait-of-man-sitting-outdoors-in-rio.jpeg?auto=compress&cs=tinysrgb&w=400",
    status: "passive",
    email: "elWali@gmail.com",
    age: 28,
  },
  {
    id: 8,
    username: "chr",
    img: "https://images.pexels.com/photos/28777759/pexels-photo-28777759/free-photo-of-casual-portrait-of-man-sitting-outdoors-in-rio.jpeg?auto=compress&cs=tinysrgb&w=400",
    status: "pending",
    email: "chr_chr@gmail.com",
    age: 25,
  },
  {
    id: 9,
    username: "chr",
    img: "https://images.pexels.com/photos/28777759/pexels-photo-28777759/free-photo-of-casual-portrait-of-man-sitting-outdoors-in-rio.jpeg?auto=compress&cs=tinysrgb&w=400",
    status: "pending",
    email: "chr_chr@gmail.com",
    age: 25,
  },
  {
    id: 10,
    username: "Snow",
    img: "https://images.pexels.com/photos/28777759/pexels-photo-28777759/free-photo-of-casual-portrait-of-man-sitting-outdoors-in-rio.jpeg?auto=compress&cs=tinysrgb&w=400",
    status: "active",
    email: "isSnow@gmail.com",
    age: 35,
  },
  {
    id: 11,
    username: "Salman",
    img: "https://images.pexels.com/photos/28777759/pexels-photo-28777759/free-photo-of-casual-portrait-of-man-sitting-outdoors-in-rio.jpeg?auto=compress&cs=tinysrgb&w=400",
    status: "passive",
    email: "Salman51@gmail.com",
    age: 41,
  },
  {
    id: 13,
    username: "elWali",
    img: "https://images.pexels.com/photos/28777759/pexels-photo-28777759/free-photo-of-casual-portrait-of-man-sitting-outdoors-in-rio.jpeg?auto=compress&cs=tinysrgb&w=400",
    status: "passive",
    email: "elWali@gmail.com",
    age: 28,
  },
  {
    id: 45,
    username: "chr",
    img: "https://images.pexels.com/photos/28777759/pexels-photo-28777759/free-photo-of-casual-portrait-of-man-sitting-outdoors-in-rio.jpeg?auto=compress&cs=tinysrgb&w=400",
    status: "pending",
    email: "chr_chr@gmail.com",
    age: 25,
  },
];
