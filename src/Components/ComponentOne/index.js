import './style.css';

function ComponentOne({language}) {
  return (
    <div className="content">
        <h4 className="title">
          {
            language==="en"?
            <>
              Hello From Component One
            </>:
            <>
             مرحبا من المكّون الأول
            </>
          }
        </h4>
    </div>
  );
}

export default ComponentOne;
