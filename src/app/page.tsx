import { Modal } from "@/components/Modal";
import Link from "next/link";

const Home =  () => {
  return (
    <main className='ds-flex flow-col-nw gap-lg p-block-16'>
      <section>
        <div className="bv-container-md">
          <h1>Hello World</h1>
        </div>
      </section>
      <section>
        <div className="bv-container-md">
          <Link href="/icons">
            Icons
          </Link>
        </div>
      </section>
      {/* <section>
        <Modal>
          <h1>Hello modal</h1>
        </Modal>
      </section> */}
    </main>
  );
}

export default Home
