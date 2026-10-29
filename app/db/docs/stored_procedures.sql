-- Add word to cloud
CREATE OR REPLACE PROCEDURE add_word_to_cloud(cloud_input uuid, word_input integer)
LANGUAGE plpgsql
AS $$
BEGIN
  INSERT INTO clouds_words(cloud_id, word_id)
  VALUES (cloud_input::uuid, word_input);
END;
$$;

select * from clouds_words;
call add_word_to_cloud('a1856214-6861-4849-ab6e-a7501be540ff',19);
select * from clouds_words;


-- Del word from cloud
CREATE OR REPLACE PROCEDURE del_word_from_cloud(cloud_input uuid, word_input integer)
LANGUAGE plpgsql
AS $$
BEGIN
  DELETE FROM clouds_words
  WHERE cloud_id=cloud_input::uuid AND word_id=word_input;
END;
$$;

select * from clouds_words;
call del_word_from_cloud('a1856214-6861-4849-ab6e-a7501be540ff',19);
select * from clouds_words WHERE cloud_id='a1856214-6861-4849-ab6e-a7501be540ff';


-- edit cloud
CREATE OR REPLACE PROCEDURE edit_cloud(cloud_id_input uuid, title_input varchar)
LANGUAGE plpgsql
AS $$
BEGIN
  UPDATE clouds
  SET title = title_input
  WHERE cloud_id = cloud_id_input::uuid;
END;
$$;

call edit_cloud('a1856214-6861-4849-ab6e-a7501be540ff', 'COLOURS');
select * from clouds where cloud_id='a1856214-6861-4849-ab6e-a7501be540ff';


-- add cloud
CREATE OR REPLACE PROCEDURE add_cloud(title_input varchar)
LANGUAGE plpgsql
AS $$
BEGIN
  INSERT INTO clouds(cloud_id, title, explicit)
  VALUES (uuid_generate_v4(), title_input, false);
END;
$$;

call del_cloud_by_title('TEST');
call add_cloud('TEST');
select * from clouds WHERE title = 'TEST';


-- delete cloud by title
CREATE OR REPLACE PROCEDURE del_cloud_by_title(title_input varchar)
LANGUAGE plpgsql
AS $$
BEGIN
  DELETE from clouds
  WHERE title = title_input;
END;
$$;

call del_cloud_by_title('TEST');
select * from clouds WHERE title='TEST';
select * from clouds;


-- delete cloud by id
CREATE OR REPLACE PROCEDURE del_cloud_by_id(cloud_id_input uuid)
LANGUAGE plpgsql
AS $$
BEGIN
  DELETE from clouds
  WHERE cloud_id = cloud_id_input::uuid;
END;
$$;

select * from clouds WHERE cloud_id='fa7babca-8844-44b0-9130-ac0b24355640';
call del_cloud_by_id('fa7babca-8844-44b0-9130-ac0b24355640');
select * from clouds WHERE cloud_id='fa7babca-8844-44b0-9130-ac0b24355640';


-- get all clouds (by id) (by title)
DROP VIEW IF EXISTS get_all_clouds;
CREATE VIEW get_all_clouds AS
SELECT * FROM clouds;

SELECT * FROM get_all_clouds;
SELECT * FROM get_all_clouds WHERE cloud_id='0b68f3a7-5341-4fba-9096-23ac4ab767f4';
SELECT * FROM get_all_clouds WHERE title='SNACKS' or title='COLORS';


--get all clouds joined with words in clouds (by cloud id) (by title) (by word id) (by name)
DROP VIEW IF EXISTS get_all_clouds_with_words;
CREATE VIEW get_all_clouds_with_words AS
SELECT clouds.cloud_id, clouds.title, words.* FROM clouds
  LEFT JOIN clouds_words on clouds.cloud_id=clouds_words.cloud_id
  LEFT JOIN words on clouds_words.word_id = words.word_id;

SELECT * FROM get_all_clouds_with_words;
SELECT * FROM get_all_clouds_with_words WHERE cloud_id='0b68f3a7-5341-4fba-9096-23ac4ab767f4';
SELECT * FROM get_all_clouds_with_words WHERE title='SNACKS' or title='COLORS' OR title='COLOURS';
SELECT * FROM get_all_clouds_with_words WHERE name='milkshake';
SELECT * FROM get_all_clouds_with_words WHERE word_id='26';

