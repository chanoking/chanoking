select id, email, first_name, last_name
from developers
where skill_code & (select sum(code) from skillcodes where category like 'Front%') > 0
order by 1