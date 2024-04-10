
export async function fetchData_StaffList() {
    const res = await fetch(
      "https://www.accessrichmond.org/o2b2/apiStaffInfo/memberInfo.aspx"
    );
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
  
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }