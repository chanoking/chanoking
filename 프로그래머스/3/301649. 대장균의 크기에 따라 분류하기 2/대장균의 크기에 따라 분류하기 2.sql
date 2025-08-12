SELECT 
  B.id,
  CASE 
    WHEN B.percentile >= 0 AND B.percentile <= 0.25 THEN 'CRITICAL'
    WHEN B.percentile > 0.25 AND B.percentile <= 0.5 THEN 'HIGH'
    WHEN B.percentile > 0.5 AND B.percentile <= 0.75 THEN 'MEDIUM'
    WHEN B.percentile > 0.75 AND B.percentile <= 1 THEN 'LOW'
    ELSE 'UNKNOWN'
  END AS colony_name
FROM (
  SELECT 
    id,
    ranks / cnt AS percentile
  FROM (
    SELECT 
      id,
      RANK() OVER (ORDER BY size_of_colony DESC) AS ranks,
      COUNT(*) OVER () AS cnt
    FROM ecoli_data
  ) AS rankA
) AS B
ORDER BY B.id;
