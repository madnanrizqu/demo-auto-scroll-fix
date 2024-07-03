import Footer from "@/components/Footer";
import { useFixFlag } from "@/contexts/fix-flag-context";
import useInViewport from "@/hooks/useInViewport";
import { isElementInViewport } from "@/utils/viewport";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { useEffect } from "react";

export default function Home(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <>
      <main className="space-y-4">
        <h1>{`Iteniraries ${props.slug}`}</h1>

        <Link href="/itineraries">Back to itineraries</Link>

        <p>This is long page</p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
          accusamus, eligendi ea maxime autem tempore, modi dolorum laudantium
          dolore cum delectus voluptate sint, molestias quod. Laudantium
          repellendus quo sit molestiae? Odit adipisci cum incidunt quam tenetur
          ex nemo ad! Maiores sed eum soluta quae. A nesciunt labore, quod
          tempore temporibus suscipit totam fugit cumque adipisci unde impedit
          recusandae. Ducimus, nisi? Modi, voluptas inventore magnam animi nemo
          necessitatibus minus! Quos eveniet commodi omnis beatae blanditiis
          cupiditate ex, perspiciatis, eius nesciunt atque voluptate suscipit
          magni excepturi quam. Expedita ratione blanditiis eum eveniet. Itaque
          sit provident iusto fugiat magnam dolorum atque necessitatibus
          voluptates, nulla eaque reprehenderit quo velit sapiente similique
          quod deleniti qui inventore quidem saepe hic optio ut eos at vel?
          Culpa? Nostrum sint, error nisi distinctio ad repudiandae tempore,
          minus, saepe fugit voluptatibus officia nemo debitis laudantium earum
          ut officiis molestiae dolores omnis non consequatur culpa vitae iure
          deserunt? Quod, fuga. Tenetur labore sit vitae? Soluta voluptatibus
          atque minima non eveniet labore minus incidunt suscipit in nihil!
          Provident consequatur officiis, perspiciatis possimus voluptas laborum
          recusandae commodi aperiam, animi earum iusto pariatur. Libero
          reiciendis repellendus voluptates, aspernatur dolorum fugit molestiae
          ratione blanditiis magni non consequuntur cum voluptate praesentium
          nesciunt incidunt tempora architecto vero excepturi, exercitationem
          reprehenderit quos, temporibus ad commodi ab! Eum? Commodi culpa fugit
          expedita! At a reprehenderit animi pariatur suscipit exercitationem
          ab, cumque, aliquid nostrum ducimus consequatur, amet deserunt illo
          libero dolorum cum. Illo praesentium nesciunt aliquam reprehenderit,
          ea corporis? Architecto debitis doloremque impedit amet nostrum enim
          fuga ipsum, iure soluta eum repellendus hic, incidunt quisquam
          consequuntur minima ad optio dolores recusandae quaerat laudantium.
          Magnam enim dicta pariatur ducimus aperiam. Adipisci hic voluptates
          soluta debitis veniam suscipit quo similique qui vitae ad iure tempora
          autem vel, doloremque totam asperiores quod minima! Repellendus
          repellat officiis cumque facilis incidunt, minus consectetur non. Iste
          ipsa perspiciatis dolorem dolores quos ad soluta odit. Possimus
          tempore reprehenderit qui nam saepe amet a suscipit unde, hic
          veritatis deleniti, laudantium cum quae culpa! Alias saepe tenetur
          quia. Iste sed repudiandae ipsa saepe labore dolore pariatur vitae
          inventore repellendus. Sed magni accusamus perspiciatis delectus
          quisquam dolorum laboriosam facere ad hic. Possimus, maiores soluta
          eius aperiam quia unde mollitia? Exercitationem ad sit molestias,
          natus voluptatum reprehenderit minima numquam praesentium laborum
          omnis magni deserunt dolore nesciunt! Porro earum, alias voluptas,
          iste quidem vero voluptatem saepe perspiciatis, eaque facere numquam
          amet. Eius ipsam deserunt quidem dolores neque nostrum ex numquam
          debitis repudiandae laudantium fuga tempora aliquam quam iusto
          deleniti fugit cum sunt, sapiente accusamus! In, totam nulla vitae
          soluta eaque nihil? Unde ex sed quae aliquid! Numquam, praesentium
          unde eos quam voluptatibus facere amet, porro similique repellendus
          impedit eligendi modi natus. Fugit veritatis mollitia illo, ducimus
          ipsa architecto officiis cumque eos. Omnis est, sed provident atque
          similique asperiores totam accusantium, soluta recusandae ipsam
          debitis voluptatem voluptas saepe magnam! Nemo iure officiis possimus,
          fugiat obcaecati, fugit deleniti non laboriosam consequuntur beatae
          nobis? Maiores nihil iste quod sed voluptatem sapiente consequuntur
          asperiores tempore officia cum! Est dolor quasi ipsa architecto
          quibusdam, sapiente, facilis tenetur quo veniam totam distinctio velit
          quis blanditiis excepturi vel! Quaerat eius laborum facere nihil
          voluptate, cumque commodi numquam magni amet! Dignissimos at eaque
          praesentium facilis eius enim tempora ea nisi tempore. Quo,
          repellendus rem recusandae quis nesciunt maxime! Itaque. Quaerat
          voluptates eius sit et accusantium! Soluta distinctio corrupti nihil
          voluptatum odio repellat sint minus obcaecati nemo, quis molestiae
          aliquid pariatur. Aspernatur corporis nesciunt, maxime iusto
          temporibus obcaecati deleniti cum. Quibusdam beatae sed ipsum soluta
          accusantium molestias tempora consectetur minus eius, minima debitis
          cum veniam voluptate dolores necessitatibus? Aliquam quae iste a
          beatae quasi in quidem pariatur numquam aut dolores?
        </p>
      </main>

      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  slug: string | string[];
}> = (ctx) => {
  return new Promise((resolve) =>
    resolve({ props: { slug: ctx.params?.slug ?? "" } })
  );
};
