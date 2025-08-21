SELECT count(*) as count
FROM ECOLI_DATA
where genotype & 2 = 0 and (genotype & 1 = 1 or genotype & 4 = 4)