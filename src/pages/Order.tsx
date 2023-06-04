import FormLayout from '../components/FormLayout';
import Title from '../components/Title';

function Order() {
    return (
        <>
            <Title
                mainText='Order Now'
                subText='Quickly order a new vacation'
            />

            <FormLayout>
                <form action=''>
                    <div className='row g-3'>
                        <div className='col-12'>
                            <label className='form-label'>
                                Vacation Package
                            </label>
                            <select className='form-select'>
                                <option value=''>Please Select...</option>
                            </select>
                        </div>
                        <div className='col-12'>
                            <label className='form-label'>Name</label>
                            <input
                                className='form-control'
                                type='text'
                            ></input>
                        </div>
                        <div className='col-12'>
                            <label className='form-label'>Email</label>
                            <input
                                className='form-control'
                                type='text'
                            ></input>
                        </div>
                        <div className='form-check mt-4'>
                            <input
                                className='form-check'
                                type='checkbox'
                            ></input>
                            <label className='form-check-label'>
                                I agree to terms...
                            </label>
                        </div>

                        <button
                            className='w-100 btn btn-primary btn-lg mt-4'
                            type='submit'
                        >
                            Continue to checkout
                        </button>
                    </div>
                </form>
            </FormLayout>
        </>
    );
}

export default Order;
