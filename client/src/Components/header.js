export const Header = () => {
    return (
        <div style={{  background: "linear-gradient(to right, rgba(102, 126, 234, 0.5), rgba(118, 75, 162, 0.5))"}} className="text-light p-5 text-center">
            <div className="container-fluid">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="pe-5">
                        <h1 className="fw-bold">Welcome to DwinaTech Shop</h1>
                        <button type="button" class="btn btn-info mt-2 fw-bold">Shooping</button>
                    </div>
                    <img className="w-50" src="https://dwinatech-shop.netlify.app/static/media/Canon-Kit.ddc86a14.png" alt="" />
                </div>
            </div>

        </div>

    )
}