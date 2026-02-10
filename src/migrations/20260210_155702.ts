import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages_blocks_big_dream_c_t_a_trust_indicators" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "pages_blocks_big_dream_c_t_a" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"background_image_id" integer,
  	"company_tag" varchar DEFAULT 'The Big O Company',
  	"headline_first_line" varchar DEFAULT 'The Dream',
  	"headline_second_line" varchar DEFAULT 'Project',
  	"supporting_text" varchar DEFAULT 'Your vision, our expertise. We''re here for you with the bold solutions and unwavering support you need.',
  	"cta_button_label" varchar DEFAULT 'Let''s Build Together',
  	"cta_button_url" varchar DEFAULT '#',
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_big_dream_c_t_a_trust_indicators" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_big_dream_c_t_a" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"background_image_id" integer,
  	"company_tag" varchar DEFAULT 'The Big O Company',
  	"headline_first_line" varchar DEFAULT 'The Dream',
  	"headline_second_line" varchar DEFAULT 'Project',
  	"supporting_text" varchar DEFAULT 'Your vision, our expertise. We''re here for you with the bold solutions and unwavering support you need.',
  	"cta_button_label" varchar DEFAULT 'Let''s Build Together',
  	"cta_button_url" varchar DEFAULT '#',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "media" ADD COLUMN "prefix" varchar DEFAULT 'media';
  ALTER TABLE "pages_blocks_big_dream_c_t_a_trust_indicators" ADD CONSTRAINT "pages_blocks_big_dream_c_t_a_trust_indicators_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_big_dream_c_t_a"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_big_dream_c_t_a" ADD CONSTRAINT "pages_blocks_big_dream_c_t_a_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_big_dream_c_t_a" ADD CONSTRAINT "pages_blocks_big_dream_c_t_a_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_big_dream_c_t_a_trust_indicators" ADD CONSTRAINT "_pages_v_blocks_big_dream_c_t_a_trust_indicators_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_big_dream_c_t_a"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_big_dream_c_t_a" ADD CONSTRAINT "_pages_v_blocks_big_dream_c_t_a_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_big_dream_c_t_a" ADD CONSTRAINT "_pages_v_blocks_big_dream_c_t_a_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_big_dream_c_t_a_trust_indicators_order_idx" ON "pages_blocks_big_dream_c_t_a_trust_indicators" USING btree ("_order");
  CREATE INDEX "pages_blocks_big_dream_c_t_a_trust_indicators_parent_id_idx" ON "pages_blocks_big_dream_c_t_a_trust_indicators" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_big_dream_c_t_a_order_idx" ON "pages_blocks_big_dream_c_t_a" USING btree ("_order");
  CREATE INDEX "pages_blocks_big_dream_c_t_a_parent_id_idx" ON "pages_blocks_big_dream_c_t_a" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_big_dream_c_t_a_path_idx" ON "pages_blocks_big_dream_c_t_a" USING btree ("_path");
  CREATE INDEX "pages_blocks_big_dream_c_t_a_background_image_idx" ON "pages_blocks_big_dream_c_t_a" USING btree ("background_image_id");
  CREATE INDEX "_pages_v_blocks_big_dream_c_t_a_trust_indicators_order_idx" ON "_pages_v_blocks_big_dream_c_t_a_trust_indicators" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_big_dream_c_t_a_trust_indicators_parent_id_idx" ON "_pages_v_blocks_big_dream_c_t_a_trust_indicators" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_big_dream_c_t_a_order_idx" ON "_pages_v_blocks_big_dream_c_t_a" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_big_dream_c_t_a_parent_id_idx" ON "_pages_v_blocks_big_dream_c_t_a" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_big_dream_c_t_a_path_idx" ON "_pages_v_blocks_big_dream_c_t_a" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_big_dream_c_t_a_background_image_idx" ON "_pages_v_blocks_big_dream_c_t_a" USING btree ("background_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_big_dream_c_t_a_trust_indicators" CASCADE;
  DROP TABLE "pages_blocks_big_dream_c_t_a" CASCADE;
  DROP TABLE "_pages_v_blocks_big_dream_c_t_a_trust_indicators" CASCADE;
  DROP TABLE "_pages_v_blocks_big_dream_c_t_a" CASCADE;
  ALTER TABLE "media" DROP COLUMN "prefix";`)
}
