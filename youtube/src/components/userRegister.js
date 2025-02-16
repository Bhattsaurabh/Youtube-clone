
export default function Register() {

    return (
        <form>
            <div className="form-group row py-2">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    Username
                </label>
                <div className="col-sm-10">
                    <input
                        type="email"
                        className="form-control"
                        id="inputEmail3"
                        placeholder="Email"
                    />
                </div>
            </div>
            <div className="form-group row py-2">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    Email
                </label>
                <div className="col-sm-10">
                    <input
                        type="email"
                        className="form-control"
                        id="inputEmail3"
                        placeholder="Email"
                    />
                </div>
            </div>
            <div className="form-group row py-2">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                    Password
                </label>
                <div className="col-sm-10">
                    <input
                        type="password"
                        className="form-control"
                        id="inputPassword3"
                        placeholder="Password"
                    />
                </div>
            </div>


            <div className="text-center col-mx-50 mt-5">
              
                    <button type="submit" className="btn btn-primary ">
                        Sign in
                    </button>
                
            </div>
        </form>

    )



}


