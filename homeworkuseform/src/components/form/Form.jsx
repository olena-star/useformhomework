import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import style from './style.module.css'





export default function Form() {

  const [countries, setCountries] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()


  const onSubmit = (data) => console.log(data)



  async function fetchCountry() {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    setCountries(data)
  }
  useEffect(() => {
    fetchCountry()
  }, []);
  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)} id="form">
        <h1>Billing details</h1>

        <div className={style.nameInput}>
          {/* First Name */}
          <div className={style.nameBlock}>
            <label>First Name</label>
            <input {...register("firstName", { required: true })} />
            {errors.firstName && <span>This field is required</span>}
          </div>
          {/* Second Name */}
          <div className={style.nameBlock}>
            <label>Second Name</label>
            <input {...register("secondName", { required: true })} />
            {errors.secondName && <span>This field is required</span>}
          </div>
        </div>
        {/* Company Name */}
        <label>Company Name (Optional)</label>
        <input {...register("companyName")} />
        {/* Country */}
        <label>Country</label>
        <select {...register("country", { required: true })}>
          {countries.map((el, index) => (
            <option key={index} value={el.name.common}>{el.name.common}</option>
          ))}
        </select>
        {errors.country && <span>This field is required</span>}
        {/* Street adress */}
        <label>Street adress</label>
        <input {...register("streetAdress", { required: true })} />
        {errors.streetAdress && <span>This field is required</span>}
        {/* Town / City */}
        <label>Town / City</label>
        <input {...register("townCity", { required: true }, { pattern: /^[A-Za-z]+$/i })} />
        {errors.townCity && <span>This field is required</span>}
        {/* Region */}
        <label>Region</label>
        <select {...register("region", { required: true })}>
          {countries.map((el, index) => (
            <option key={index} value={el.region}>{el.region}</option>
          ))}
        </select>
        {/* ZIP code */}
        <label>ZIP code</label>
        <input {...register("zipCode", { required: true, pattern: /^\d{5}$/ })} />
        {errors.zipCode && <span>This field is required</span>}
        {/* Phone */}
        <label>Phone</label>
        <input {...register("phone", { required: true, }, {})} />
        {errors.phone && <span>This field is required</span>}
        {/* Email address */}
        <label>Email address</label>
        <input
          {...register("mail", { required: "Email Address is required" })}
          aria-invalid={errors.mail ? "true" : "false"}
        />
        {errors.mail && <p role="alert">{errors.mail.message}</p>}
      </form>

      <article className={style.blockSum}>
        <div className={style.blockTitle}>
          <div className={style.blockLeft}>
            <h2>Product</h2>
            <h3>
              <span>Asgaard sofa </span>
              <span className={style.x1}>x 1</span></h3>
            <h3>Subtotal</h3>
            <h3>Total</h3>
          </div>
          <div className={style.blockRight}>
            <h2>Subtotal</h2>
            <p>Rs. 250,000.00</p>
            <p>Rs. 250,000.00</p>
            <p className={style.total}>Rs. 250,000.00</p>
          </div>
        </div>

        <div>

          <input type="radio" name="bank" value='bank' id="bank" checked />
          <label onInput='bank' className={style.bankLabel}>Direct Bank Transfer</label>
          <p className={style.bankText}>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
          <input type="radio" name="cash" value='cash' id="cash" />
          <label onInput='cash' className={style.cashLabel}>Cash On Delivery</label>
          <p className={style.cashText}>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span style={{ fontWeight: '600', color: '#000000' }}>privacy policy.</span></p>


        </div>

        <button type="submit" form="form" className={style.btn}>Place order</button>
      </article>
    </section>
  )
}